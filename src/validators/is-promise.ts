import {__proto__} from '../utilities';

/**
 * Checks whether the given value is a promise.
 *
 * @param {*} value Contains the value to be checked whether it is a promise.
 * @return {boolean} whether the input value is a promise.
 */
export function isPromise<T = any>(
  value: T | Promise<any>,
): value is Promise<any> {
  return __proto__(value) === '[object Promise]';
}
