/**
 * Checks whether the given variable is `null`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given variable is `null`.
 */
export function isNull(value: any): value is null {
  // by using === instead of ==, js won't try to "find" similarities
  // but instead it will make sure the value is `null`
  return value === null;
}
