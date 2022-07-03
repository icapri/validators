import {__proto__} from '../utilities';

/**
 * Checks whether a given value is a date object.
 *
 * @param {*} value Contains the value to be checked whether it is a
 * date object.
 * @return {boolean} whether the given value is of type date.
 */
export function isDate(value: any): value is Date {
  return __proto__(value) === '[object Date]';
}
