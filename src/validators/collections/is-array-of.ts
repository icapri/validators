import {Constructable, Primitive} from '../../utilities/types';
import {isPrimitive} from '../common/is-primitive';

/**
 * Represents the possible types of the array items.
 */
type ArrayItemType = Constructable | Primitive;

/**
 * Checks whether all the items of the given array are of the given type.
 *
 * @param {Array} array Contains some array.
 * @param {*} itemType Contains some data type for the array items. Right now
 * it only supports primitive types and constructable types.
 * @return {Boolean} whether all the items of the given array are of the
 * given type.
 */
export function isArrayOf(
  array: Array<any>,
  itemType: ArrayItemType,
): boolean {
  if (isPrimitive(itemType)) {
    return array.every((item: any) => typeof item === itemType);
  }

  return array.every((item: any) => item instanceof itemType);
}
