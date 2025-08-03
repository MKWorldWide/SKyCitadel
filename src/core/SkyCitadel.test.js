import assert from 'node:assert/strict';
import { test } from 'node:test';
import { SkyCitadel } from './SkyCitadel.js';

test('constructs inactive citadel with coordinates', () => {
  const citadel = new SkyCitadel('Test', { lat: 0, lng: 0, altitude: 100 }, 432);
  assert.equal(citadel.isActive, false);
  assert.deepEqual(citadel.getStatus().coordinates, { lat: 0, lng: 0, altitude: 100 });
});
