const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'index.html');
const readmePath = path.join(root, 'README.md');

function fail(message) {
  console.error(`CI check failed: ${message}`);
  process.exit(1);
}

function expectIncludes(haystack, needle, label) {
  if (!haystack.includes(needle)) {
    fail(`Missing ${label}: ${needle}`);
  }
}

const html = fs.readFileSync(htmlPath, 'utf8');
const readme = fs.readFileSync(readmePath, 'utf8');

expectIncludes(html, '<canvas id="c"></canvas>', 'main canvas');
expectIncludes(html, 'id="btn-run"', 'run button');
expectIncludes(html, 'id="btn-step"', 'step button');
expectIncludes(html, 'id="btn-pause"', 'pause button');
expectIncludes(html, 'id="btn-halt"', 'halt button');
expectIncludes(html, '@media (max-width: 760px)', 'mobile breakpoint');
expectIncludes(html, 'grid-template-rows: clamp(180px, 34vh, 260px) auto auto;', 'mobile screen stack');
expectIncludes(html, 'height: clamp(180px, 34vh, 260px);', 'mobile canvas height rule');

const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  fail('Embedded script tag not found');
}

try {
  new Function(scriptMatch[1]);
} catch (error) {
  fail(`Embedded JavaScript syntax error: ${error.message}`);
}

const algoSelectBlock = html.match(/<select id="algo-select"[\s\S]*?>([\s\S]*?)<\/select>/);
if (!algoSelectBlock) {
  fail('Algorithm select block not found');
}

const optionValues = [...algoSelectBlock[1].matchAll(/<option value="([^"]+)">/g)].map((match) => match[1]);
const uniqueOptions = [...new Set(optionValues)];

const algoInfoBlock = html.match(/const ALGO_INFO = \{([\s\S]*?)\n\};/);
if (!algoInfoBlock) {
  fail('ALGO_INFO block not found');
}

const algoKeys = [...algoInfoBlock[1].matchAll(/^\s*['"]?([a-z-]+)['"]?\s*:\s*\{/gm)].map((match) => match[1]);
const uniqueAlgoKeys = [...new Set(algoKeys)];

if (uniqueOptions.length !== uniqueAlgoKeys.length) {
  fail(`Algorithm option count (${uniqueOptions.length}) does not match ALGO_INFO count (${uniqueAlgoKeys.length})`);
}

for (const key of uniqueOptions) {
  if (!uniqueAlgoKeys.includes(key)) {
    fail(`Algorithm option "${key}" is missing from ALGO_INFO`);
  }
}

expectIncludes(readme, '## Overview', 'README overview section');
expectIncludes(readme, '## Launch', 'README launch section');
expectIncludes(readme, '## GitHub Pages', 'README GitHub Pages section');

console.log('CI check passed');
