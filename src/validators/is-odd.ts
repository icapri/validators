import {isNumber} from './is-number';

/**
 * Checks whether the given value is an odd number.
 *
 * @param {*} value Contains the value to be checked whether it is odd number.
 * @return {boolean} wether the given value is an odd number.
 */
export function isOdd<T = any>(value: T | number): value is number {
  return isNumber(value) && Math.abs(value % 2) == 1;
}
