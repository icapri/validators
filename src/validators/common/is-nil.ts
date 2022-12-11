/**
 * Checks whether the given value is `null`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is `null`.
 *
 * @see isNull
 */
export function isNil(value: any): value is null {
  return value == null;
}
