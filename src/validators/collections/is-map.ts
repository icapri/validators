/**
 * Checks whether the given value is a `Map`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is a `Map`.
 */
export function isMap(value: any): value is Map<any, any> {
  return value instanceof Map;
}
