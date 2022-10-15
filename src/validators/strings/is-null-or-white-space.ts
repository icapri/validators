import {isNull} from '../common/is-null';
import {isWhiteSpace} from './is-white-space';

/**
 * Checks whether the given value is `null` or white-spaces.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is `null` or white-spaces.
 */
export function isNullOrWhiteSpace(value: any): value is null | string {
  return isNull(value) || isWhiteSpace(value);
}
