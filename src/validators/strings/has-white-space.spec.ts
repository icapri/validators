import {hasWhiteSpace} from './has-white-space';

const v1 = 'john doe';
const v2 = ' name';
const v3 = 'surname ';
const v4 = '';
const v5 = 'nowhitespaces';

test('hasWhiteSpace()', () => {
  expect(hasWhiteSpace(v1)).toBe(true);
  expect(hasWhiteSpace(v2)).toBe(true);
  expect(hasWhiteSpace(v3)).toBe(true);
  expect(hasWhiteSpace(v4)).toBe(false);
  expect(hasWhiteSpace(v5)).toBe(false);
});
