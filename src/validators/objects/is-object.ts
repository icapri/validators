/**
 * Checks whether the given value is an object.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is an object.
 */
export function isObject(value: any): value is object | Object {
  return Object.prototype.toString.call(value) === '[object Object]';
}
