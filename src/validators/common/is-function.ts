import {Func} from '../../utilities/types';

/**
 * Checks whether the given value is a function.
 *
 * @param {*} value Contains some value. Could be everything possible.
 * @return {Boolean} whether the value of the given variable is a function.
 *
 * @see isFunc
 */
export function isFunction(value: any): value is Func {
  return typeof value === 'function';
}
