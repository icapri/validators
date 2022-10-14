import { isNumber } from "../numbers/is-number";
import { isIterable } from "./is-iterable";

/**
 * Checks whether the given value is an array-like.
 *
 * @param value Contains the value of some given variable.
 * @returns whether the given value looks like an array.
 */
export function isArrayLike(value: any): value is any {
  // the given variable is an array-like object in case it is
  // iterable and has a property `length` of type `number`
  return isIterable(value) && isNumber(value.length);
}
