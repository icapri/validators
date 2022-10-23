import {isBool} from '../..';

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

test('isBool()', () => {
  expect(isBool(test1)).toBe(true);
  expect(isBool(test2)).toBe(true);
  expect(isBool(test3)).toBe(true);
  expect(isBool(test4)).toBe(true);
  expect(isBool(test5)).toBe(false);
  expect(isBool(test6)).toBe(false);
  expect(isBool(test7)).toBe(false);
  expect(isBool(test8)).toBe(false);
  expect(isBool(test9)).toBe(false);
  expect(isBool(test10)).toBe(false);
  expect(isBool(test11)).toBe(false);
  expect(isBool(test12)).toBe(false);
  expect(isBool(test13)).toBe(false);
  expect(isBool(test14)).toBe(false);
});
