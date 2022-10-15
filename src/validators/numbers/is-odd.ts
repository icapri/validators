import {isNumber} from './is-number';

/**
 * Checks whether the given value is an odd number.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is an odd number.
 */
export function isOdd(value: any): value is number {
  return isNumber(value) && Math.abs(value % 2) === 1;
}
