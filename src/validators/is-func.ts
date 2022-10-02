/**
 * Checks whether the given value is a function.
 *
 * @param {*} value Contains the value to be checked whether it is a function.
 * @return {boolean} whether the given value is a function.
 */
export function isFunc<T = any>(value: T | Function): value is Function {
  return Object.prototype.toString.call(value).indexOf('Function') > -1;
}
