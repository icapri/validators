import {isWhiteSpace} from './is-white-space';

const v1 = '';
const v2 = String();
const v3 = '  ';
const v4 = '      -';
const v5 = ' nonempty';

test('isWhiteSpace()', () => {
  expect(isWhiteSpace(v1)).toBe(true);
  expect(isWhiteSpace(v2)).toBe(true);
  expect(isWhiteSpace(v3)).toBe(true);
  expect(isWhiteSpace(v4)).toBe(false);
  expect(isWhiteSpace(v5)).toBe(false);
});
