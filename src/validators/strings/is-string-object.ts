import {isObject} from '../objects/is-object';

/**
 * Checks whether the given value is an instance of the `String` object.
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is an instance of
 * the `String` object.
 */
export function isStringObject(value: any): value is String {
  const prototype = Object.prototype.toString.call(value);
  return isObject(value) && prototype === '[object String]';
}
