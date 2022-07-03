import {Nullish} from '../types';
import {isEmpty} from './is-empty';

/**
 * Checks whether the given input parameter has a non-falsy value.
 *
 * @param {*} value Contains the input to be checked whether it represents a
 * non-falsy value.
 * @return {boolean} whether the given input parameter has a non-falsy value.
 */
export function hasValue<T = any>(value: Nullish<T>): value is T {
  return !isEmpty(value);
}
