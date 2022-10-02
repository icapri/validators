/**
 * Checks whether the input parameter is an object.
 *
 * @param {*} value Contains the value to be checked whether it is an object.
 * @return {boolean} whether the given value is of type object.
 */
export function isObject<T = any>(value: T | object): value is object {
  return Object.prototype.toString.call(value) === '[object Object]';
}
