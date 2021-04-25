import { expect, test } from '@jest/globals';
import * as randomUtils from '../../src/util/random';

const newId = randomUtils.getNewId();

test('new id should have expected length', () => {
  expect(newId.length).toBeGreaterThanOrEqual(10);
  expect(newId.length).toBeLessThanOrEqual(12);
});

test('new id should match expected regex', () => {
  expect(newId).toMatch(/^[a-z0-9]{10,12}$/g);
});
