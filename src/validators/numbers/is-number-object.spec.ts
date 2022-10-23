import {isNumberObject} from './is-number-object';

const v1: any = new Number('55');
const v2: any = Number('55');

test('isNumberObject()', () => {
  expect(isNumberObject(v1)).toBe(true);
  expect(isNumberObject(v2)).toBe(false);
});
