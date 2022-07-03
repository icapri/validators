import {__proto__} from '../utilities';

/**
 * Checks whether the input parameter is a boolean value.
 *
 * @param {*} value Contains the value to be checked whether it is boolean.
 * @return {boolean} whether the given value is of type boolean.
 */
export function isBool(value: any): value is boolean {
  return value === true ||
    value === false ||
    __proto__(value) === '[object Boolean]';
}
