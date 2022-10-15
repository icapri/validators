/**
 * Checks whether the given value is of type `number`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is of type `number`.
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number' && isFinite(value);
}
