import {isArray} from './is-array';

/**
 * Checks whether the given value is an empty array.
 *
 * @param {*} value Contains some value.
 * @return {Boolean} whether the given value is an empty array.
 */
export function isEmptyArray(value: any): value is [] {
  return isArray(value) && value.length === 0;
}
