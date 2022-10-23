import {isValidDate} from '../..';

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
const test16 = new Date();
const test17 = new Date('2022-01-01');

test('isValidDate()', () => {
  expect(isValidDate(test1)).toBe(false);
  expect(isValidDate(test2)).toBe(false);
  expect(isValidDate(test3)).toBe(false);
  expect(isValidDate(test4)).toBe(false);
  expect(isValidDate(test5)).toBe(false);
  expect(isValidDate(test6)).toBe(false);
  expect(isValidDate(test7)).toBe(false);
  expect(isValidDate(test8)).toBe(false);
  expect(isValidDate(test9)).toBe(false);
  expect(isValidDate(test10)).toBe(false);
  expect(isValidDate(test11)).toBe(false);
  expect(isValidDate(test12)).toBe(false);
  expect(isValidDate(test13)).toBe(false);
  expect(isValidDate(test14)).toBe(false);
  expect(isValidDate(test15)).toBe(false);
  expect(isValidDate(test16)).toBe(true);
  expect(isValidDate(test17)).toBe(true);
});
