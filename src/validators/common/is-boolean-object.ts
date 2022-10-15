import {isObject} from '../objects/is-object';

/**
 * Checks whether the given value is an instance of the `Boolean`
 * object.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is an istance of the
 * `Boolean` object.
 */
export function isBooleanObject(value: any): value is Boolean {
  return isObject(value) && typeof value.valueOf() === 'boolean';
}
