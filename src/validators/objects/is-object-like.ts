import {isNull} from '../common/is-null';

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
  // because of a JavaScript bug which returns `object` for `typeof null`
  // it is necessary to firstly check whether the value is non-null
  return !isNull(value) && typeof value === 'object';
}
