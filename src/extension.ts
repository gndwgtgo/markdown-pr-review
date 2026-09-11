import * as vscode from 'vscode';
import { ReviewPanel } from './ReviewPanel';
import { getGitContext, relativeTo, readText, type GitContext } from './GitContext';
import type { PrFile } from './types';
import {
  getGitHubToken,
  findPrNumber,
  fetchPrFiles,
  fetchPrComments,
  fetchThreadMeta,
  fetchPrHeadSha,
  type PrFilesResult,
} from './GitHubClient';

function pickInitialFile(mdFiles: string[], activeRelPath: string | null, openByFile: Record<string, number>): string {
  if (activeRelPath && mdFiles.includes(activeRelPath)) return activeRelPath;
  return mdFiles.find(p => (openByFile[p] ?? 0) > 0) ?? mdFiles[0];
}

// null = confirmed no open PR on this branch
let prStatusCache: { branch: string; prNumber: number | null } | undefined;
let statusBarDebounce: ReturnType<typeof setTimeout> | undefined;

async function refreshPrStatusBar(item: vscode.StatusBarItem): Promise<void> {
  try {
    const { owner, repo, branch } = await getGitContext(vscode.window.activeTextEditor?.document.uri);
    if (!branch) {
      // No branch to look a PR up by (virtual workspace). Stay clickable: the command
      // asks for a PR number instead.
      item.text = '$(comment-discussion) Markdown PR Review';
      item.show();
      return;
    }
    if (prStatusCache?.branch === branch) {
      if (prStatusCache.prNumber == null) { item.hide(); return; }
      item.text = `$(comment-discussion) PR #${prStatusCache.prNumber}`;
      item.show();
      return;
    }
    const session = await vscode.authentication.getSession('github', ['repo'], { createIfNone: false });
    if (!session) {
      // No auth yet — show generic so user can click to authenticate
      item.text = `$(comment-discussion) Markdown PR Review`;
      item.show();
      return;
    }
    try {
      const { prNumber } = await findPrNumber(owner, repo, branch, session.accessToken);
      prStatusCache = { branch, prNumber };
      item.text = `$(comment-discussion) PR #${prNumber}`;
      item.show();
    } catch {
      // Confirmed no open PR for this branch
      prStatusCache = { branch, prNumber: null };
      item.hide();
    }
  } catch {
    item.hide();
  }
}

async function promptForPr(ctx: GitContext, token: string): Promise<{ prNumber: number; headSha: string }> {
  const input = await vscode.window.showInputBox({
    title: `Review a PR in ${ctx.owner}/${ctx.repo}`,
    prompt: 'No git branch is available here, so enter the PR number to review',
    validateInput: v => (/^\s*\d+\s*$/.test(v) ? undefined : 'Enter a PR number'),
  });
  if (!input) throw new Error('Cancelled.');
  const prNumber = Number(input.trim());
  return { prNumber, headSha: await fetchPrHeadSha(ctx.owner, ctx.repo, prNumber, token) };
}

export function activate(context: vscode.ExtensionContext): void {
  const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.command = 'markdown-pr-review.openReview';
  statusBarItem.tooltip = 'Markdown PR Review';
  context.subscriptions.push(statusBarItem);

  const scheduleRefresh = () => {
    if (statusBarDebounce) clearTimeout(statusBarDebounce);
    statusBarDebounce = setTimeout(() => refreshPrStatusBar(statusBarItem), 2000);
  };

  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(scheduleRefresh)
  );

  // Also react to git branch changes so the bar updates without a file switch.
  const gitExt = vscode.extensions.getExtension<{ getAPI(v: 1): { repositories: Array<{ state: { onDidChange: vscode.Event<void> } }> } }>('vscode.git');
  if (gitExt?.isActive) {
    for (const repo of gitExt.exports.getAPI(1).repositories) {
      context.subscriptions.push(repo.state.onDidChange(scheduleRefresh));
    }
  }

  refreshPrStatusBar(statusBarItem);

  const command = vscode.commands.registerCommand(
    'markdown-pr-review.openReview',
    async () => {
      const editor = vscode.window.activeTextEditor;

      try {
        const ctx = await getGitContext(editor?.document.uri);
        const { token, userLogin } = await getGitHubToken();
        // Prompt outside withProgress — an input box behind a progress notification is hidden.
        const { prNumber, headSha } = ctx.branch
          ? await findPrNumber(ctx.owner, ctx.repo, ctx.branch, token)
          : await promptForPr(ctx, token);

        await vscode.window.withProgress(
          {
            location: vscode.ProgressLocation.Notification,
            title: 'Loading PR comments…',
            cancellable: false,
          },
          async () => {
            const { owner, repo, rootUri } = ctx;
            const { mdFiles, validLinesByPath }: PrFilesResult = await fetchPrFiles(owner, repo, prNumber, token);
            if (mdFiles.length === 0) {
              throw new Error('This PR has no markdown files.');
            }

            // Resolve active editor path before fetching so we can pick the right initial file
            const activeRelPath = editor ? relativeTo(rootUri, editor.document.uri) : null;

            const threadMetaResult = await fetchThreadMeta(owner, repo, prNumber, token).catch(() => []);
            const openByFile: Record<string, number> = {};
            const resolvedByFile: Record<string, number> = {};
            for (const t of threadMetaResult) {
              if (!t.path) continue;
              if (t.isResolved) resolvedByFile[t.path] = (resolvedByFile[t.path] ?? 0) + 1;
              else openByFile[t.path] = (openByFile[t.path] ?? 0) + 1;
            }

            const selectedFile = pickInitialFile(mdFiles, activeRelPath, openByFile);
            const comments = await fetchPrComments(owner, repo, prNumber, selectedFile, token).catch(() => []);

            const prFiles: PrFile[] = mdFiles.map(p => ({
              path: p,
              openCount: openByFile[p] ?? 0,
              resolvedCount: resolvedByFile[p] ?? 0,
            }));

            const markdown = await readText(vscode.Uri.joinPath(rootUri, selectedFile));

            const panel = ReviewPanel.createOrShow(context.extensionUri);
            panel.render(
              markdown,
              comments,
              threadMetaResult,
              {
                owner,
                repo,
                prNumber,
                headSha,
                rootUri,
                filePath: selectedFile,
                prFiles,
                validLinesByPath,
                currentUserLogin: userLogin,
              }
            );
          }
        );
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        vscode.window.showErrorMessage(`PR Review: ${message}`);
      }
    }
  );

  context.subscriptions.push(command);
}

export function deactivate(): void {}
