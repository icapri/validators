/**
 * Checks whether the given value is of type `bigint`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is of type `bigint`.
 *
 * @see isBigInteger
 */
export function isBigInt(value: any): value is bigint {
  return typeof value === 'bigint';
}
