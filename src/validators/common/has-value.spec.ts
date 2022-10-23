import {hasValue} from './has-value';

const v1: string = '';
const v2: number = 0;
const v4: any = null;
const v5: any = undefined;
const v6: any = NaN;
const v7: any = [];
const v8: string = '  ';

test.only('hasValue()', () => {
  expect(hasValue(v1)).toBe(false);
  expect(hasValue(v2)).toBe(false);
  expect(hasValue(v4)).toBe(false);
  expect(hasValue(v5)).toBe(false);
  expect(hasValue(v6)).toBe(false);
  expect(hasValue(v7)).toBe(true);
  expect(hasValue(v8)).toBe(true);
});
