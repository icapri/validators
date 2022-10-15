/**
 * Checks whether the given variable is `null`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given variable is `null`.
 */
export function isNull(value: any): value is null {
  // this next line is just magic :)
  return value == null;
}
