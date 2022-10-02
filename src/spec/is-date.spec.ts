import { isDate } from "..";

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
const test15 = new Date('');

test('isDate()', () => {
  expect(isDate(test1)).toBe(false);
  expect(isDate(test2)).toBe(false);
  expect(isDate(test3)).toBe(false);
  expect(isDate(test4)).toBe(false);
  expect(isDate(test5)).toBe(false);
  expect(isDate(test6)).toBe(false);
  expect(isDate(test7)).toBe(false);
  expect(isDate(test8)).toBe(false);
  expect(isDate(test9)).toBe(false);
  expect(isDate(test10)).toBe(false);
  expect(isDate(test11)).toBe(false);
  expect(isDate(test12)).toBe(false);
  expect(isDate(test13)).toBe(false);
  expect(isDate(test14)).toBe(false);
  expect(isDate(test15)).toBe(true);
});
