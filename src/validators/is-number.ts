/**
 * Checks whether the input parameter is a number.
 *
 * @param {*} value Contains the value to be checked whether it is a number.
 * @return {boolean} whether the given value is of type number.
 */
export function isNumber<T = any>(value: T | number): value is number {
  return typeof value === 'number' && isFinite(value);
}
