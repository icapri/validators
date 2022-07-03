/**
 * Checks whether a given value is of one of the primitive types.
 *
 * @param {*} value Contains the value to be checked whether it is a primitive
 * type.
 * @return {Boolean} whether the given value is of primitive type.
 */
export function isPrimitive<T>(value: T): boolean {
  return value !== Object(value);
}
