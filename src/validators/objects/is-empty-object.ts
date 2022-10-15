import {hasProperty} from './has-property';
import {isObject} from './is-object';

/**
 * Checks whether the given value is an empty object.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is an empty object.
 */
export function isEmptyObject(value: any): value is {} {
  if (!isObject(value)) {
    return false;
  }

  for (const prop in value) {
    if (hasProperty(value, prop)) {
      return false;
    }
  }

  return JSON.stringify(value) === JSON.stringify(value);
}
