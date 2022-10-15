import {isUndefined} from './is-undefined';

/**
 * Checks whether the given value is defined.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is defined.
 */
export function isDefined<T>(value: T | undefined): value is T {
  return !isUndefined(value);
}
