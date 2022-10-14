import {isNull} from './is-null';
import {isUndefined} from './is-undefined';

/**
 * Checks whether the input parameter is null or not defined.
 *
 * @param {*} value Contains the value to be checked whether it is null or not
 * defined.
 * @return {boolean} whether the given value is either null or undefined.
 */
export function isNullOrUndefined(value: any): value is null | undefined {
  return isNull(value) || isUndefined(value);
}
