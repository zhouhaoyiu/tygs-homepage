import assert from 'node:assert/strict';
import { createElement, version as reactVersion } from 'react';
import { version as reactDomVersion } from 'react-dom';

assert.equal(
  reactVersion,
  reactDomVersion,
  'React and React DOM must resolve to the same version',
);

const { createRoot } = await import('react-dom/client');
assert.equal(typeof createRoot, 'function');

const { renderToString } = await import('react-dom/server');
assert.equal(
  renderToString(createElement('span', null, 'runtime-ok')),
  '<span>runtime-ok</span>',
);

console.log(`React runtime check passed (${reactVersion})`);
