import {isBooleanObject} from './is-boolean-object';

const v1: Boolean = new Boolean('false');
const v2: any = Boolean(false);
const v3: any = false;
const v4: any = !0;
const v5: any = !1;
const v6: any = true;
const v7: any = new Boolean(true);
const v8: Boolean = new Boolean(false);

test('isBooleanObject()', () => {
  expect(isBooleanObject(v1)).toBe(true);
  expect(isBooleanObject(v2)).toBe(false);
  expect(isBooleanObject(v3)).toBe(false);
  expect(isBooleanObject(v4)).toBe(false);
  expect(isBooleanObject(v5)).toBe(false);
  expect(isBooleanObject(v6)).toBe(false);
  expect(isBooleanObject(v7)).toBe(true);
  expect(isBooleanObject(v8)).toBe(true);
});
