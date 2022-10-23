import {isMap} from './is-map';

const m1: Map<string, string> = new Map<string, string>();
const m2: Set<string> = new Set<string>();
const m3: any[] = [];

test('isMap()', () => {
  expect(isMap(m1)).toBe(true);
  expect(isMap(m2)).toBe(false);
  expect(isMap(m3)).toBe(false);
});
