import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import GithubSlugger from 'github-slugger';
import hljs from 'highlight.js/lib/common';
import type Token from 'markdown-it/lib/token.mjs';
import type StateBlock from 'markdown-it/lib/rules_block/state_block.mjs';
import type Renderer from 'markdown-it/lib/renderer.mjs';
import type { Options } from 'markdown-it';

// GitHub renders ```jsonc; highlight.js has no such language. Alias it to javascript
// rather than json, which would leave the // comments uncoloured.
hljs.registerAliases(['jsonc'], { languageName: 'javascript' });

function frontMatterRule(state: StateBlock, startLine: number, _endLine: number, silent: boolean): boolean {
  // Only match at the very start of the document.
  if (startLine !== 0 || state.bMarks[0] + state.tShift[0] !== state.bMarks[0]) return false;
  const firstLine = state.src.slice(state.bMarks[0], state.eMarks[0]);
  if (firstLine !== '---') return false;

  let closeAt = -1;
  for (let i = 1; i < state.lineMax; i++) {
    if (state.src.slice(state.bMarks[i], state.eMarks[i]) === '---') { closeAt = i; break; }
  }
  if (closeAt === -1) return false;
  if (silent) return true;

  const token = state.push('front_matter', '', 0);
  token.content = state.src.slice(state.eMarks[0] + 1, state.bMarks[closeAt]);
  token.map = [0, closeAt + 1];
  state.line = closeAt + 1;
  return true;
}

function renderFrontMatter(content: string): string {
  const rows = content
    .split('\n')
    .filter(l => l.includes(':'))
    .map(l => {
      const idx = l.indexOf(':');
      const key = escapeHtml(l.slice(0, idx).trim());
      const val = escapeHtml(l.slice(idx + 1).trim());
      return `<tr><td class="fm-key">${key}</td><td class="fm-val">${val}</td></tr>`;
    })
    .join('');
  return `<div class="pr-front-matter"><table>${rows}</table></div>\n`;
}

export function renderMarkdown(rawSource: string): string {
  // html: true lets GitHub-flavoured inline HTML through (<br> in table cells, <kbd>,
  // <sub>, native <details>). DOMPurify sanitises the rendered output below, which is the
  // markdown-it -> sanitise -> mermaid -> overlay pipeline the architecture always specified.
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    breaks: false,
    highlight: (str: string, lang: string): string => {
      const name = lang.trim().toLowerCase();
      if (!name || !hljs.getLanguage(name)) return '';
      try {
        // Return only the inner HTML, never a full <pre>: markdown-it hands a <pre>-prefixed
        // result straight through and would drop the data-line attr comments anchor to.
        return hljs.highlight(str, { language: name, ignoreIllegals: true }).value;
      } catch {
        return '';
      }
    },
  });

  md.block.ruler.before('hr', 'front_matter', frontMatterRule);
  md.renderer.rules['front_matter'] = (tokens, idx) => renderFrontMatter(tokens[idx].content);

  const slugger = new GithubSlugger();
  md.use(anchor, {
    slugify: (s: string) => slugger.slug(s),
  });

  // Enable source maps so token.map = [startLine, endLine] is populated on block tokens.
  (md.options as Record<string, unknown>)['sourceMap'] = true;

  // Inject data-line="N" on every opening block tag that has a source map.
  // This is what makes comment anchoring possible — overlay.ts finds the element
  // whose data-line is closest to the comment's line number.
  const originalRenderToken = md.renderer.renderToken.bind(md.renderer);
  md.renderer.renderToken = (tokens: Token[], idx: number, options: Options): string => {
    const token = tokens[idx];
    if (token.map && token.nesting === 1) {
      token.attrSet('data-line', String(token.map[0]));
    }
    return originalRenderToken(tokens, idx, options);
  };

  // Replace fenced ```mermaid blocks with <div class="mermaid"> so mermaid.run() picks them up.
  const defaultFence = md.renderer.rules['fence'] as
    | ((tokens: Token[], idx: number, options: Options, env: unknown, self: Renderer) => string)
    | undefined;

  md.renderer.rules['fence'] = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const lang = token.info.trim().toLowerCase();
    if (lang === 'mermaid') {
      const lineAttr = token.map ? ` data-line="${token.map[0]}"` : '';
      return `<div class="mermaid"${lineAttr}>${escapeHtml(token.content)}</div>\n`;
    }
    if (token.map) {
      token.attrSet('data-line', String(token.map[0]));
    }
    if (defaultFence) {
      return defaultFence(tokens, idx, options, env, self);
    }
    return self.renderToken(tokens, idx, options);
  };

  // Raw HTML blocks are emitted verbatim by markdown-it, dropping token attrs. Wrap them
  // so overlay.ts still finds a data-line to anchor a comment to (e.g. a <details> block).
  md.renderer.rules['html_block'] = (tokens, idx) => {
    const t = tokens[idx];
    return t.map ? `<div data-line="${t.map[0]}">${t.content}</div>` : t.content;
  };

  const rendered = md.render(rawSource);

  // <summary> content sits inside a raw HTML block, so markdown-it leaves it verbatim —
  // GitHub does the same. Keep rendering it anyway: this extension has always done so and
  // `<summary>**Title**</summary>` is what people actually write.
  const withSummaries = rendered.replace(
    /<summary>([\s\S]*?)<\/summary>/gi,
    (_, inner: string) => `<summary>${md.renderInline(inner.trim())}</summary>`
  );

  // NOTE: html: true means this output is unsafe until sanitised. Every caller must go
  // through setHtml() in sanitize.ts — never assign it to innerHTML directly.
  return withSummaries;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
