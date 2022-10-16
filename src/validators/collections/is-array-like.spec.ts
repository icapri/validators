import {isArrayLike} from '../..';

const test1: Array<number> = [];
const test2 = new Array<string>('');
const test3 = {};

test('isArrayLike()', () => {
  expect(isArrayLike(test1)).toBe(true);
  expect(isArrayLike(test2)).toBe(true);
  expect(isArrayLike(test3)).toBe(false);
});
