/**
 * Checks whether the given value is an array.
 *
 * @param value Contains some value.
 * @returns whether the given value is an `Array` object. 
 */
export function isArray(value: any): value is Array<any> {
  return Object.prototype.toString.call(value) === '[object Object]';
}
