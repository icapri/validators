import {Nullish} from '../types';
import {isNullOrUndefined} from './is-null-or-undefined';
import {isPrototype} from './is-prototype';

/**
 * Checks whether the input parameter represents an empty value.
 *
 * @param {*} value Contains the value to be checked whether it is empty.
 * @return {boolean} whether the value is empty.
 */
export function isEmpty<T>(
  value: Nullish<T>,
): value is null | undefined {
  const keys = Object.getOwnPropertyNames(value);
  const symbols = Object.getOwnPropertySymbols(value);

  if (isNullOrUndefined(value)) {
    return true;
  }

  if (isPrototype(value) &&
    !Object.getOwnPropertyNames(value).length &&
    !Object.getOwnPropertySymbols(value).length) {
    return true;
  }

  if (value instanceof Map || value instanceof Set) {
    return !value.size;
  }
  const has = Object.prototype.hasOwnProperty;
  return keys.some((key) => !has.call(value, key)) ||
    symbols.some((key) => !has.call(value, key));
}
