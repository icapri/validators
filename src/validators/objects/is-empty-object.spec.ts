import {isEmptyObject} from './is-empty-object';

const v1: any = {};
const v2: any = new Object();
const v3: any = new Object([]);

test('isEmptyObject()', () => {
  expect(isEmptyObject(v1)).toBe(true);
  expect(isEmptyObject(v2)).toBe(true);
  expect(isEmptyObject(v3)).toBe(false);
});
