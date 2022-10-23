import {isIterable } from './is-iterable';

const x1: string = 'sdcsdc'; // we intentionally excluded strings
const x2: any[] = [];

test('isIterable()', () => {
  expect(isIterable(x1)).toBe(false);
  expect(isIterable(x2)).toBe(true);
});
