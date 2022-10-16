/**
 * Checks whether the given value is a floating point number.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is a float number.
 */
export function isFloat(value: any): value is number {
  return Number(value) === value && value % 1 !== 0;
}
