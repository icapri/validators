/**
 * Checks whether the given variable is `null`.
 *
 * @param {*} value Contains the value of a given variable.
 * @return {Boolean} whether the given variable is `null`.
 */
export function isNull(value: any): value is null {
  // this next line is just magic :)
  return value == null;
}
