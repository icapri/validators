import {isBoolean} from './is-boolean';

/**
 * Checks whether the given value is of type `boolean`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is of type `boolean`.
 *
 * @see isBoolean
 */
export function isBool(value: any): value is boolean {
  return isBoolean(value);
}
