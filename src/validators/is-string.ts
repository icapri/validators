import {__proto__} from '../utilities';

/**
 * Checks whether a given value is of type string.
 *
 * @param {*} value Contains the value to be checked whether it is a string.
 * @return {boolean} whether the given value is a string.
 */
export function isString<T = any>(value: T | string): value is string {
  return typeof value === 'string' || __proto__(value) === '[object String]';
}
