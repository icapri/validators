import {isObject} from './is-object';

/**
 * Checks whether the two objects are deep-equal.
 *
 * @param {Object} o1 Contains some object.
 * @param {Object} o2 Contains some other object.
 * @return {boolean} whether the two objects deep-equal.
 */
export function deepEqual(o1: any, o2: any): boolean {
  // this can be considered the best and the most practical
  // method for deep comparizon between two objects besides
  // there are situations where this method cannot help
  return isObject(o1) &&
    isObject(o2) &&
    JSON.stringify(o1) === JSON.stringify(o2);
}
