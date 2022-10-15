import {IterableObject} from '../../utilities/interfaces';
import {isFunc} from '../common/is-func';
import {isNull} from '../common/is-null';
import {isString} from '../strings/is-string';

/**
 * Checks whether the given value is iterable.
 *
 * @param {*} value Contains the value of a given variable.
 * @return {Boolean} whether the given value is iterable.
 */
export function isIterable(value: any): value is IterableObject {
  // firstly strings and `null` values should be excluded because especially
  // regarding strings there is some issue that they behave as iterable
  // objects besides being no collections
  return !isNull(value) && !isString(value) && isFunc(value[Symbol.iterator]);
}
