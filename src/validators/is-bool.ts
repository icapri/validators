/**
 * Checks whether the input parameter is a boolean value.
 *
 * @param {*} value Contains the value to be checked whether it is boolean.
 * @return {boolean} whether the given value is of type boolean.
 */
export function isBool<T>(
  value: T | boolean | Boolean,
): value is boolean | Boolean {
  const bools: Array<any> = [true, false, !0, !1];
  return bools.includes(value) ||
    Object.prototype.toString.call(value) === '[object Boolean]';
}
