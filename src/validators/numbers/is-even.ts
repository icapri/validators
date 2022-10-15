import {isNumber} from './is-number';

/**
 * Checks whether the given value is an even number.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is an even number.
 */
export function isEven(value: any): value is number {
  return isNumber(value) && value % 2 === 0;
}
