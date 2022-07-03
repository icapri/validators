import {hasProperty} from './has-property';
import {isDefined} from './is-defined';
import {isObject} from './is-object';

/**
 * Checks whether the input parameter is a plain object.
 *
 * @param {*} value Contains the value to be checked whether it is plain object.
 * @return {boolean} whether the given input parameter is a plain object.
 */
export function isPlainObject<T = any>(value: T | object): value is object {
  if (!isObject(value)) {
    return false;
  }
  const constructor = value.constructor;
  if (isDefined(constructor)) {
    const prototype = constructor.prototype;
    if (!isObject(prototype) || !hasProperty(prototype, 'isPrototypeOf')) {
      return false;
    }
  }
  return true;
}
