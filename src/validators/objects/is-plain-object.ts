import {PlainObject} from '../../utilities/interfaces';
import {isDefined} from '../common/is-defined';
import {hasProperty} from './has-property';
import {isObject} from './is-object';

/**
 * Checks whether the given value is a plain object.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is a plain object.
 */
export function isPlainObject(value: any): value is PlainObject {
  // if the value is not an object, it cannot be a plain object either
  if (!isObject(value) || !('constructor' in value)) {
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
