import {isNumber} from './is-number';

/**
 * Contains whether the given number is an even number.
 *
 * @param {*} value Contains the value to be checked whether it is an even
 * number.
 * @return {boolean} whether the given value is an even number.
 */
export function isEven<T = any>(value: T | number): value is number {
  return isNumber(value) && value % 2 == 0;
}
