import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';

// The extension ships one bundle for both hosts, and vscode.dev runs it in a Web Worker
// with no node builtins. esbuild's platform: 'browser' already fails the build on a bare
// `import * as fs from 'fs'`, but not on a lazy require or a node:-prefixed specifier —
// this catches those, and names the replacement in the failure message.
const BANNED = ['fs', 'path', 'child_process', 'os', 'crypto', 'http', 'https', 'net'];

for (const file of readdirSync('src').filter(f => f.endsWith('.ts'))) {
  const src = readFileSync(`src/${file}`, 'utf8');
  for (const mod of BANNED) {
    for (const pattern of [`from '${mod}'`, `from 'node:${mod}'`, `require('${mod}')`, `require('node:${mod}')`]) {
      assert.ok(
        !src.includes(pattern),
        `src/${file} uses node's ${mod} — unavailable on vscode.dev. Use vscode.workspace.fs / vscode.Uri instead.`
      );
    }
  }
}

console.log('All web-compat tests passed ✓');
