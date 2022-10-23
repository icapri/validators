import {isPrimitive} from './is-primitive';

const v1: any = 'primitive1';
const v2: any = '';
const v3: any = 0;
const v4: any = 555;
const v5: any = false;
const v6: any = true;
const v7: any = !0;
const v8: any = !1;
const v9: any = null;
const v10: any = Symbol('foo');
const v11: any = undefined;

const v12: any = new Object('');
const v13: any = [];

test('isPrimitive()', () => {
  expect(isPrimitive(v1)).toBe(true);
  expect(isPrimitive(v2)).toBe(true);
  expect(isPrimitive(v3)).toBe(true);
  expect(isPrimitive(v4)).toBe(true);
  expect(isPrimitive(v5)).toBe(true);
  expect(isPrimitive(v6)).toBe(true);
  expect(isPrimitive(v7)).toBe(true);
  expect(isPrimitive(v8)).toBe(true);
  expect(isPrimitive(v9)).toBe(true);
  expect(isPrimitive(v10)).toBe(true);
  expect(isPrimitive(v11)).toBe(true);
  expect(isPrimitive(v12)).toBe(false);
  expect(isPrimitive(v13)).toBe(false);
});
