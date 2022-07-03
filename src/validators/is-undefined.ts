import {Indefinable} from '../types';

/**
 * Checks whether a given parameter is of type undefined or has no value set.
 *
 * @param {*} value Contains the value to be checked whether it is not defined.
 * @return {boolean} whether either the type or the value of the parameter is
 * undefined.
 */
export function isUndefined<T = any>(
  value: Indefinable<T>,
): value is undefined {
  return typeof value === 'undefined' || value === undefined;
}
