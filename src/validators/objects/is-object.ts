/**
 * Checks whether the given value is an object.
 *
 * @param {*} value Contains the value of some variable.
 * @return {Boolean} whether the given value is an object.
 */
export function isObject(value: any): value is object | Object {
  return Object.prototype.toString.call(value) === '[object Object]';
}
