import {KeyType} from '../types/types';

/**
 * Checks whether a given object contains a property with a given key.
 *
 * Example
 * ```typescript
 * const user = new User();
 * if (hasProperty(user, 'password')) {
 *   // do something..
 * }
 * ```
 *
 * @param {object} object Contains an object to be checked for a given
 * property.
 * @param {KeyType} key Contains a value to be checked
 * whether it is the key of the given object.
 * @return {boolean} whether the property with the given key is property
 * of the given object.
 */
export function hasProperty<T extends object>(
  object: T,
  key: KeyType,
): key is keyof T {
  return Object.prototype.hasOwnProperty.call(object, key);
}
