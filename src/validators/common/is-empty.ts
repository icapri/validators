import {Falsy} from '../../utilities/types';
import {isFalsy} from './is-falsy';

/**
 * Checks whether the given value is empty/falsy.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is empty.
 *
 * @see isFalsy
 */
export function isEmpty<T>(value: T | Falsy): value is Falsy {
  return isFalsy(value);
}
