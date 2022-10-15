import {isNull} from '../common/is-null';
import {isString} from './is-string';

/**
 * Checks whether the given value is a white-spaces string.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is a white-spaces string.
 */
export function isWhiteSpace(value: any): value is string {
  return isString(value) && !isNull(value.match(/^ *$/));
}
