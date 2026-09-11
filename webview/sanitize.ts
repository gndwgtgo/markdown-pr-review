import DOMPurify from 'dompurify';

// The single trust boundary for rendered markdown. Sources are attacker-influenceable
// (repo files and PR comment bodies), and renderer.ts runs markdown-it with html: true,
// so nothing rendered may reach the DOM except through here.
// data-* attributes and class survive DOMPurify's defaults, which is what comment
// anchoring (data-line) and syntax highlighting (language-*, hljs-*) need.
export function setHtml(el: HTMLElement, html: string): void {
  el.innerHTML = DOMPurify.sanitize(html);
}
