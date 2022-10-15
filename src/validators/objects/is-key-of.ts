import {Key} from '../../utilities/types';
import {hasProperty} from './has-property';

/**
 * Checks whether the given object has a property with the given key.
 *
 * @param {Object} object Contains some object.
 * @param {Key} key
 * @return {Boolean} whether the given object has a property with
 * the given key.
 */
export function isKeyOf<TObject extends object>(
  object: TObject,
  key: Key,
): key is keyof TObject {
  return hasProperty(object, key);
}
