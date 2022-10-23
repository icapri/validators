import {isEmptyString} from './is-empty-string';

const v1 = '';
const v2 = String();
const v3 = '  ';
const v4 = '      -';
const v5 = ' nonempty';

test('isEmptyString()', () => {
  expect(isEmptyString(v1)).toBe(true);
  expect(isEmptyString(v2)).toBe(true);
  expect(isEmptyString(v3)).toBe(false);
  expect(isEmptyString(v4)).toBe(false);
  expect(isEmptyString(v5)).toBe(false);
});
