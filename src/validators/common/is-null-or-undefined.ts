/**
 * Checks whether the input parameter is `null` or `undefined`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is `null` or `undefined`.
 */
export function isNullOrUndefined(value: any): value is null | undefined {
  // if == is used, js tries to find similarities between the two values
  // compared and in this case null == undefined
  return value == null;
}
