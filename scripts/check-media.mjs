import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, join, relative, sep } from 'node:path';

const root = resolve(import.meta.dirname, '..');
function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}
const sourceFiles = files(join(root, 'src')).filter(path => /\.(tsx?|css)$/.test(path));
const media = new Set();
for (const file of sourceFiles) {
  const text = readFileSync(file, 'utf8');
  assert(!/dthomasmoses\.com|wp-content\/plugins\/pbhs/i.test(text), `Old-site dependency in ${file}`);
  for (const match of text.matchAll(/["'](\/(?:images|videos)\/[^"'\r\n]+)["']/g)) media.add(match[1]);
}
for (const url of media) {
  for (const folder of ['public', ...(process.argv.includes('--dist') ? ['dist'] : [])]) {
    const path = join(root, folder, decodeURIComponent(url));
    assert(existsSync(path), `Missing ${folder} media: ${url}`);
    assert(statSync(path).size > 0, `Empty media: ${url}`);
    // Catch Windows-only case mismatches before deploying to Linux.
    const actual = files(join(root, folder)).map(file => '/' + relative(join(root, folder), file).split(sep).join('/'));
    assert(actual.includes(decodeURIComponent(url)), `Incorrect path case: ${url}`);
  }
}
const redirects = join(root, 'public/_redirects');
if (existsSync(redirects)) assert(!/^\/\*\s+\/index\.html\s+200/m.test(readFileSync(redirects, 'utf8')), 'Catch-all redirect regression');
console.log(`Validated ${media.size} local media paths${process.argv.includes('--dist') ? ' in source and dist' : ''}; no old-site dependencies.`);
