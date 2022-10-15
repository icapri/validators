import {isMap} from './is-map';

/**
 * Checks whether the given value is an empty map.
 *
 * @param {*} value Contains some value.
 * @return {Boolean} whether the given value is an empty map.
 */
export function isEmptyMap(value: any): value is Map<any, any> {
  return isMap(value) && value.size === 0;
}
