/**
 * Checks whether the given value is of type `boolean`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is of type `boolean`.
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}
