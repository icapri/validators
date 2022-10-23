import {isNullOrUndefined} from './is-null-or-undefined';

const v1: any = null;
const v2: any = NaN;
const v3: any = undefined;
const v4: any = '';
const v5: undefined = undefined;
const v6: string = 'null';
const v7: string = 'undefined';

test('isNullOrUndefined()', () => {
  expect(isNullOrUndefined(v1)).toBe(true);
  expect(isNullOrUndefined(v2)).toBe(false);
  expect(isNullOrUndefined(v3)).toBe(true);
  expect(isNullOrUndefined(v4)).toBe(false);
  expect(isNullOrUndefined(v5)).toBe(true);
  expect(isNullOrUndefined(v6)).toBe(false);
  expect(isNullOrUndefined(v7)).toBe(false);
});