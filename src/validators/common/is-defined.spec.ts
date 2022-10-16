import { isDefined } from "../..";

class Test {
  test1?: string;
}

const test1: number | undefined = undefined;
const test2: number | undefined = 0;
const test3 = new Test().test1;

test('isDefined()', () => {
  expect(isDefined(test1)).toBe(false);
  expect(isDefined(test2)).toBe(true);
  expect(isDefined(test3)).toBe(false);
});