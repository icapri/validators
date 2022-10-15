import {isBigInt} from './is-bigint';

/**
 * Checks whether the given value is of type `bigint`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is of type `bigint`.
 *
 * @see isBigInt
 */
export function isBigInteger(value: any): value is bigint {
  return isBigInt(value);
}
