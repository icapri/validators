import {isNull} from './is-null';
import {isUndefined} from './is-undefined';

/**
 * Checks whether the input parameter is `null` or `undefined`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is `null` or `undefined`.
 */
export function isNullOrUndefined(value: any): value is null | undefined {
  return isNull(value) || isUndefined(value);
}
