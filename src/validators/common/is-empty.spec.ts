import {isEmpty} from './is-empty';

const v1: string = '';
const v2: number = 0;
const v4: any = null;
const v5: any = undefined;
const v6: any = NaN;
const v7: any = [];
const v8: string = '  ';

test.only('isEmpty()', () => {
  expect(isEmpty(v1)).toBe(true);
  expect(isEmpty(v2)).toBe(true);
  expect(isEmpty(v4)).toBe(true);
  expect(isEmpty(v5)).toBe(true);
  expect(isEmpty(v6)).toBe(true);
  expect(isEmpty(v7)).toBe(false);
  expect(isEmpty(v8)).toBe(false);
});
