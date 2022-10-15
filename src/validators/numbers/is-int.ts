import {isInteger} from './is-integer';

/**
 * Checks whether the given value is an integer.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is an integer.
 *
 * @see isInteger
 */
export function isInt(value: any): value is number {
  return isInteger(value);
}
