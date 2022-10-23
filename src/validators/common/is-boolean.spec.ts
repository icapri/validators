import {isBoolean} from '../..';

const test1 = !0;
const test2 = !1;
const test3 = true;
const test4 = false;
const test5 = new Boolean('false');
const test6 = NaN;
const test7 = null;
const test8 = 0;
const test9 = '';
const test10 = undefined;
const test11 = 5;
const test12 = {};
const test13 = ' ';
const test14: Array<string> = [];

test('isBoolean()', () => {
  expect(isBoolean(test1)).toBe(true);
  expect(isBoolean(test2)).toBe(true);
  expect(isBoolean(test3)).toBe(true);
  expect(isBoolean(test4)).toBe(true);
  expect(isBoolean(test5)).toBe(false);
  expect(isBoolean(test6)).toBe(false);
  expect(isBoolean(test7)).toBe(false);
  expect(isBoolean(test8)).toBe(false);
  expect(isBoolean(test9)).toBe(false);
  expect(isBoolean(test10)).toBe(false);
  expect(isBoolean(test11)).toBe(false);
  expect(isBoolean(test12)).toBe(false);
  expect(isBoolean(test13)).toBe(false);
  expect(isBoolean(test14)).toBe(false);
});
