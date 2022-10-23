import {isSet} from './is-set';

const m1: Map<string, string> = new Map<string, string>();
const m2: Set<string> = new Set<string>();
const m3: any[] = [];

test('isSet()', () => {
  expect(isSet(m1)).toBe(false);
  expect(isSet(m2)).toBe(true);
  expect(isSet(m3)).toBe(false);
});
