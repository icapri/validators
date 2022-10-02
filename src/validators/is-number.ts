/**
 * Checks whether the input parameter is a number.
 *
 * @param {*} value Contains the value to be checked whether it is a number.
 * @return {boolean} whether the given value is of type number.
 */
export function isNumber<T = any>(value: T | number): value is number {
  if (typeof value === 'number') {
    return value - value === 0;
  }

  if (typeof value === 'string' && value.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+value) : isFinite(+value);
  }

  return false;
}
