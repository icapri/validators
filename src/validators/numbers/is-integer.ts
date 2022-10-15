import {isNumber} from './is-number';

/**
 * Checks whether the given value is an integer.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is an integer.
 *
 * @see isInt
 */
export function isInteger(value: any): value is number {
  return isNumber(value) && Math.floor(value) === value;
}
