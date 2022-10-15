import {isDate} from './is-date';

/**
 * Checks whether the given value is a valid `Date` object.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is a valid `Date` object.
 */
export function isValidDate(value: any): value is Date {
  return isDate(value) && !isNaN(value.getTime());
}
