import {isArray} from '..';

const test1: Array<number> = [];
const test2 = new Array<string>('');
const test3 = {};

test('isArray()', () => {
  expect(isArray(test1)).toBe(true);
  expect(isArray(test2)).toBe(true);
  expect(isArray(test3)).toBe(false);
});
