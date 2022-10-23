import {isStringObject} from './is-string-object';

test('isStringObject()', () => {
  expect(isStringObject(new String())).toBe(true);
  expect(isStringObject(String(''))).toBe(false);
});
