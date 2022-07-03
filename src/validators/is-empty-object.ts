import {Nullish} from '../types';
import {isObject} from './is-object';

/**
 * Checks whether a given object is empty.
 *
 * @param {*} value Contains the object to be checked whether it is empty.
 * @return {boolean} whether the given object is an empty object.
 */
export function isEmptyObject<T>(
  value: Nullish<T>,
): value is null | undefined {
  return (
    isObject(value) &&
    !Object.getOwnPropertyNames(value).length &&
    !Object.getOwnPropertySymbols(value).length
  );
}
