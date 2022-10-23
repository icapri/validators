import {isEmptySet} from './is-empty-set';

const set1: Set<any> = new Set();
const set2: Set<any> = new Set();
set2.add(undefined);

test('isEmptySet()', () => {
  expect(isEmptySet(set1)).toBe(true);
  expect(isEmptySet(set2)).toBe(false);
});
