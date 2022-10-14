import { isPrimitive } from "../common/is-primitive";

type Primitive =
  | "string"
  | "number"
  | "bigint"
  | "boolean"
  | "null"
  | "symbol"
  | "undefined";

type Constructable = new (...args: any[]) => any;

/**
 * Checks whether all the items of the given array are of the given type.
 *
 * @param array Contains some array.
 * @param itemType Contains some data type for the array items. Right now
 * it only supports primitive types and constructable types.
 * @returns whether all the items of the given array are of the given type.
 */
export function isArrayOf(
  array: Array<any>,
  itemType: Constructable | Primitive
): boolean {
  if (isPrimitive(itemType)) {
    return array.every((item: any) => typeof item === itemType);
  }

  return array.every((item: any) => item instanceof itemType);
}
