/**
 * Checks whether the given value is a `Set`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is a `Set`.
 */
export function isSet(value: any): value is Set<any> {
  return value instanceof Set;
}
