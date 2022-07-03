import {isDate} from './is-date';

/**
 * Checks whether a given value is a valid date object.
 *
 * @param {*} value Contains the value to be checked whether it is a valid
 * date object.
 * @return {boolean} whether the given value is of type date.
 */
export function isValidDate(value: any): value is Date {
  return isDate(value) && !isNaN(value.getTime());
}
