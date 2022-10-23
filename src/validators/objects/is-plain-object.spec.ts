import {isPlainObject} from './is-plain-object';

const v1: any = {};
const v2: any = {
  name: '',
  age: 55
};
const v3: any = new Object('val');

test('isPlainObject()', () => {
  expect(isPlainObject(v1)).toBe(true);
  expect(isPlainObject(v2)).toBe(true);
  expect(isPlainObject(v3)).toBe(false);
});