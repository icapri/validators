import { isNull } from "../common/is-null";

/**
 * Checks whether the given value looks like object.
 *
 * @param {*} value Contains the value to be checked whether it looks
 * like object.
 * @return {boolean} whether the given value looks like object.
 */
export function isObjectLike<T = any>(
  value: T | null | object,
): value is object {
  return !isNull(value) && typeof value === 'object';
}
