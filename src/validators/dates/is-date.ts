/**
 * Checks whether the given value is a `Date` object.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is a `Date` object.
 */
export function isDate(value: any): value is Date {
  return Object.prototype.toString.call(value) === '[object Date]';
}
