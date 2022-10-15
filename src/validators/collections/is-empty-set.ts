import {isSet} from './is-set';

/**
 * Checks whether the given value is an empty set.
 *
 * @param {*} value Contains some value.
 * @return {Boolean} whether the given value is an empty set.
 */
export function isEmptySet(value: any): value is Set<any> {
  return isSet(value) && value.size === 0;
}
