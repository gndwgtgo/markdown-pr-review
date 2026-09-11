import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';

// renderer.ts runs markdown-it with html: true, so its output is unsafe until it goes
// through setHtml() in sanitize.ts. This is a source-level check because the realistic
// regression is wiring (someone reintroduces `innerHTML = renderMarkdown(...)`), not
// DOMPurify itself. It needs no DOM, so it runs with the other tsx tests.
for (const file of readdirSync('webview').filter(f => f.endsWith('.ts'))) {
  const src = readFileSync(`webview/${file}`, 'utf8');
  for (const [i, line] of src.split('\n').entries()) {
    const code = line.replace(/\/\/.*$/, '');
    assert.ok(
      !/innerHTML\s*=\s*[^;]*renderMarkdown/.test(code),
      `webview/${file}:${i + 1} assigns renderMarkdown output straight to innerHTML — use setHtml()`
    );
  }
}

const sanitize = readFileSync('webview/sanitize.ts', 'utf8');
assert.ok(/DOMPurify\.sanitize\(/.test(sanitize), 'setHtml must sanitise through DOMPurify');

console.log('All sanitize-wiring tests passed ✓');
