import { isEmptyArray } from './is-empty-array';

const arr1 = new Array<any>();
const arr2: any[] = [];
const arr3: any[] = [undefined];

test('isEmptyArray()', () => {
  expect(isEmptyArray(arr1)).toBe(true);
  expect(isEmptyArray(arr2)).toBe(true);
  expect(isEmptyArray(arr3)).toBe(false);
});
