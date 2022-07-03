import {isEmpty} from './is-empty';
import {isNull} from './is-null';

/**
 * Checks whether the given value is either null or empty.
 *
 * @param {*} value Contains the value to be checked whether it is either null
 * or empty.
 * @return {boolean} whether the given value is null or empty.
 */
export function isNullOrEmpty<T = any>(value: T | null): value is null {
  return isNull(value) || isEmpty(value);
}
