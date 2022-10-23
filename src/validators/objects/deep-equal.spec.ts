import {deepEqual} from './deep-equal';

const v1: any = {
  a: 5,
  b: false,
  c: 'abc'
};
const v2: any = {
  a: 5,
  b: false,
  c: 'abc'
};
const v3: any = {
  a: 5.5,
  b: false,
  c: 'abc'
};

test('deepEqual()', () => {
  expect(deepEqual(v1, v2)).toBeTruthy();
  expect(deepEqual(v1, v3)).toBeFalsy();
});
