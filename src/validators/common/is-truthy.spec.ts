import {isTruthy} from './is-truthy';

const v1: string = '';
const v2: number = 0;
const v4: any = null;
const v5: any = undefined;
const v6: any = NaN;
const v7: any = [];
const v8: string = '  ';

test.only('isTruthy()', () => {
  expect(isTruthy(v1)).toBe(false);
  expect(isTruthy(v2)).toBe(false);
  expect(isTruthy(v4)).toBe(false);
  expect(isTruthy(v5)).toBe(false);
  expect(isTruthy(v6)).toBe(false);
  expect(isTruthy(v7)).toBe(true);
  expect(isTruthy(v8)).toBe(true);
});
