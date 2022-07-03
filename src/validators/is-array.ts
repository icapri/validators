import {__proto__} from '../utilities';

/**
 * Checks whether the input parameter is an array.
 *
 * @param {*} value Contains the value to be checked whether it is an array.
 * @return {boolean} whether the given value is an array.
 */
export function isArray(value: any): value is any[] {
  return __proto__(value) === '[object Array]';
}
