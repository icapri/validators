/**
 * Checks whether a given value is of type integer.
 *
 * @param {*} value Contains the value to be checked whether it is integer.
 * @return {boolean} whether the given value is an integer.
 */
export function isInt<T = any>(value: T | number): value is number {
  return Number(value) === value && value % 1 === 0;
}
