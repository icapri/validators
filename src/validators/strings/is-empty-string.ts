import {isString} from './is-string';

/**
 * Checks whether the given value is an empty string.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is an empty string.
 */
export function isEmptyString(value: any): value is '' {
  return isString(value) && value.length === 0;
}
