/**
 * Checks whether the given value is of type `Set<T>`.
 *
 * @param {*} value Contains the value to be checked whether it is a Set.
 * @return {Boolean} whether the given value is of type Set<T>.
 */
export function isSet<T, U>(value: T | Set<U>): value is Set<U> {
  return value instanceof Set;
}
