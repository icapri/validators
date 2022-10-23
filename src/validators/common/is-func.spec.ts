import {isFunc} from './is-func';

const v1: any = () => console.log('value1');
const v2: any = function () {
  alert('yuhu!');
}
const v3: any = Function();

test('isFunc()', () => {
  expect(isFunc(v1)).toBe(true);
  expect(isFunc(v1)).toBe(true);
  expect(isFunc(v1)).toBe(true);
});