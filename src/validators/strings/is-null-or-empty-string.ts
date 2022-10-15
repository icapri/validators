import {isNull} from '../common/is-null';
import {isEmptyString} from './is-empty-string';

/**
 * Checks whether the given value is either `null` or `""`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is either `null` or `""`.
 */
export function isNullOrEmptyString(value: any): value is null | '' {
  return isNull(value) || isEmptyString(value);
}
