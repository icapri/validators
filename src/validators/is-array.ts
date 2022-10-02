/**
 * Checks whether the input parameter is an array.
 *
 * @param {*} value Contains the value to be checked whether it is an array.
 * @return {boolean} whether the given value is an array.
 */
export function isArray<T>(value: T | any[]): value is any[] {
  return Object.prototype.toString.call(value) === '[object Array]';
}
