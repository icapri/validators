import {Nullish} from '../types';
import {isNullOrUndefined} from './is-null-or-undefined';
import {isString} from './is-string';

/**
 * Checks whether the input parameter is null or a string of white spaces.
 *
 * @param {*} value Contains the value to be checked whether it is null a string
 * of white spaces.
 * @return {boolean} whether the given value is null or an empty string.
 */
export function isNullOrWhiteSpace<T = any>(
  value: Nullish<T | string>,
): value is string | null | undefined {
  return (
    isNullOrUndefined(value) || (isString(value) && value.trim().length === 0)
  );
}
