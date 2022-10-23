import {isUndefined} from './is-undefined';

const v1: any = undefined;
let v2: undefined;
const v3: any = 'undefined';

test('isUndefined()', () => {
  expect(isUndefined(v1)).toBe(true);
  expect(isUndefined(v2)).toBe(true);
  expect(isUndefined(v3)).toBe(false);
});
