import {Indefinable} from '../types';
import {isUndefined} from './is-undefined';

/**
 * Checks whether the input parameter is a defined value.
 *
 * @param {*} value Contains the value to be checked whether it is defined.
 * @return {boolean} whether the given value is defined.
 */
export function isDefined<T>(value: Indefinable<T>): value is T {
  return !isUndefined(value);
}
