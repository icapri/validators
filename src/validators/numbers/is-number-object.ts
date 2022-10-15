import {isObject} from '../objects/is-object';

/**
 * Checks whether the given value is an instance of the `Number`
 * object.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is an instance of
 * the `Number` object.
 */
export function isNumberObject(value: any): value is Number {
  const prototype = Object.prototype.toString.call(value);
  return isObject(value) && prototype === '[object Number]';
}
