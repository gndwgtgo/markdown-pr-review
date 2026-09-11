import * as vscode from 'vscode';

export interface GitContext {
  owner: string;
  repo: string;
  /** null when no git is available (virtual workspace, or detached HEAD). */
  branch: string | null;
  /** Repository root. May be any scheme — file:// on desktop, vscode-vfs:// on vscode.dev. */
  rootUri: vscode.Uri;
}

// Minimal shape of the built-in git extension's API — replaces shelling out to `git`,
// which is unavailable in the Web Worker extension host that vscode.dev runs.
interface GitRepository {
  rootUri: vscode.Uri;
  state: {
    HEAD?: { name?: string };
    remotes: Array<{ name: string; fetchUrl?: string; pushUrl?: string }>;
  };
}

async function gitRepositories(): Promise<GitRepository[]> {
  const ext = vscode.extensions.getExtension<{ getAPI(v: 1): { repositories: GitRepository[] } }>('vscode.git');
  if (!ext) return [];
  const api = (ext.isActive ? ext.exports : await ext.activate()).getAPI(1);
  return api.repositories;
}

/** `owner/repo` from the markdown-pr-review.repository setting, if set to a valid value. */
function configuredRepo(): { owner: string; repo: string } | undefined {
  const value = vscode.workspace.getConfiguration('markdown-pr-review').get<string>('repository')?.trim();
  const match = value?.match(/^([^/\s]+)\/([^/\s]+?)(?:\.git)?$/);
  return match ? { owner: match[1], repo: match[2] } : undefined;
}

function workspaceRootFor(resource?: vscode.Uri): vscode.Uri {
  const folder = resource ? vscode.workspace.getWorkspaceFolder(resource) : undefined;
  const root = folder?.uri ?? vscode.workspace.workspaceFolders?.[0]?.uri;
  if (!root) throw new Error('No workspace folder open.');
  return root;
}

export async function getGitContext(resource?: vscode.Uri): Promise<GitContext> {
  const root = workspaceRootFor(resource);

  // vscode.dev opens GitHub repos as vscode-vfs://github/<owner>/<repo>. There is no git
  // directory to interrogate, but the URI itself carries owner and repo, which is more
  // reliable than parsing a remote URL. Branch is unavailable, so callers ask for a PR number.
  if (root.scheme !== 'file') {
    const [uriOwner, uriRepo] = root.path.replace(/^\//, '').split('/');
    const fromUri = root.authority.startsWith('github') && uriOwner && uriRepo
      ? { owner: uriOwner, repo: uriRepo }
      : undefined;
    // Any other virtual file system (vscode-test-web://mount, a remote FS provider) carries
    // no repo identity, so fall back to the setting.
    const target = fromUri ?? configuredRepo();
    if (!target) {
      throw new Error(
        `Cannot tell which GitHub repo ${root.scheme}://${root.authority} is. ` +
        'Open it via vscode.dev/github/<owner>/<repo>, or set markdown-pr-review.repository ' +
        'to "owner/repo".'
      );
    }
    return { ...target, branch: null, rootUri: root };
  }

  const repositories = await gitRepositories();
  // Longest matching root wins, so a file inside a submodule resolves to the submodule.
  const match = repositories
    .filter(r => (resource ?? root).path.startsWith(r.rootUri.path))
    .sort((a, b) => b.rootUri.path.length - a.rootUri.path.length)[0];
  if (!match) throw new Error('Not a git repository.');

  const branch = match.state.HEAD?.name ?? null;
  const configured = configuredRepo();
  if (configured) return { ...configured, branch, rootUri: match.rootUri };

  const origin = match.state.remotes.find(r => r.name === 'origin') ?? match.state.remotes[0];
  const remoteUrl = origin?.fetchUrl ?? origin?.pushUrl;
  if (!remoteUrl) throw new Error('No git remote named "origin" found.');

  const { owner, repo } = parseGitHubRemote(remoteUrl);
  return { owner, repo, branch, rootUri: match.rootUri };
}

// Exported for testability — parses both HTTPS and SSH remote URLs.
export function parseGitHubRemote(remoteUrl: string): { owner: string; repo: string } {
  // https://github.com/owner/repo.git  or  https://github.com/owner/repo
  const httpsMatch = remoteUrl.match(/github\.com\/([^/]+)\/([^/.]+)/);
  // git@github.com:owner/repo.git
  const sshMatch = remoteUrl.match(/github\.com:([^/]+)\/([^/.]+)/);
  const match = httpsMatch ?? sshMatch;
  if (!match) {
    throw new Error(`Cannot parse GitHub remote URL: ${remoteUrl}`);
  }
  return { owner: match[1], repo: match[2] };
}

/** Repo-relative path of a file, or null if it sits outside the repo. */
export function relativeTo(root: vscode.Uri, file: vscode.Uri): string | null {
  const prefix = root.path.endsWith('/') ? root.path : `${root.path}/`;
  return file.path.startsWith(prefix) ? file.path.slice(prefix.length) : null;
}

/** workspace.fs works across every scheme, unlike node's fs. */
export async function readText(uri: vscode.Uri): Promise<string> {
  return new TextDecoder().decode(await vscode.workspace.fs.readFile(uri));
}
