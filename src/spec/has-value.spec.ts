import {hasValue} from '..';

const test1 = NaN;
const test2 = null;
const test3 = false;
const test4 = 0;
const test5 = '';
const test6 = undefined;
const test7 = 5;
const test8 = {};
const test9 = true;
const test10 = ' ';
const test11: Array<string> = [];

test('hasValue()', () => {
  expect(hasValue(test1)).toBe(false);
  expect(hasValue(test2)).toBe(false);
  expect(hasValue(test3)).toBe(false);
  expect(hasValue(test4)).toBe(false);
  expect(hasValue(test5)).toBe(false);
  expect(hasValue(test6)).toBe(false);
  expect(hasValue(test7)).toBe(true);
  expect(hasValue(test8)).toBe(true);
  expect(hasValue(test9)).toBe(true);
  expect(hasValue(test10)).toBe(true);
  expect(hasValue(test11)).toBe(true);
});
