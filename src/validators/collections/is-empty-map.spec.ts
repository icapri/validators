import {isEmptyMap} from './is-empty-map';

const map1: Map<any, any> = new Map();
const map2: Map<any, any> = new Map();
map2.set('item', undefined);

test('isEmptyMap()', () => {
  expect(isEmptyMap(map1)).toBe(true);
  expect(isEmptyMap(map2)).toBe(false);
});
