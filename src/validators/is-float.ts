/**
 * Checks whether a given value is of type float.
 *
 * @param {*} value Contains the value to be checked whether it is a float
 * number.
 * @return {boolean} whether the given value is a float number.
 */
export function isFloat<T = any>(value: T | number): value is number {
  return Number(value) === value && value % 1 !== 0;
}
