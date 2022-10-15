import {Constructable} from '../../utilities/types';
import {isConstructor} from './is-constructor';

/**
 * Checks whether the given value can be instantiated i. e.
 * whether it has a constructor.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value can be instantiated i. e.
 * whether it has a constructor.
 *
 * @see isConstructor
 */
export function isConstructable(value: any): value is Constructable {
  return isConstructor(value);
}
