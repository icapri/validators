/**
 * Checks whether the given value is an array.
 *
 * @param {*} value Contains some value.
 * @return {Boolean} whether the given value is an `Array` object.
 */
export function isArray(value: any): value is any[] | readonly any[] {
  // there are several ways of checking whether an object is an array
  // but I chose for this one because of backwards compatibility
  // alternatives would be `value.constructor === Array` or the
  // most trivial way is just calling `Array.isArray()` which is
  // a method of the Array prototype (depends on the JS version)
  return Object.prototype.toString.call(value) === '[object Array]';
}
