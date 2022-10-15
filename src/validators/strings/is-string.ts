/**
 * Checks whether the given value is of type `string`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is of type `string`.
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}
