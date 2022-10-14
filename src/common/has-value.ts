import { isTruthy } from "./is-truthy";

/**
 * Checks whether the given input parameter has a non-falsy value.
 *
 * @param {*} value Contains the input to be checked whether it represents a
 * non-falsy value.
 * @return {boolean} whether the given input parameter has a non-falsy value.
 */
export function hasValue<T = any>(
  value: T | false | "" | 0 | 0n | null | undefined
): value is T {
  return isTruthy(value);
}
