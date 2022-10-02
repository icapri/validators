/**
 * Checks whether the given value is of type `Map<U, V>`.
 *
 * @param {*} value Contains the value to be checked whether it is a map.
 * @return {Boolean} whether the given value is of type Map<U, V>.
 */
export function isMap<T, U, V>(value: T | Map<U, V>): value is Map<U, V> {
  return value instanceof Map;
}
