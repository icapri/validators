import { Func } from "../../utilities/types";
import { isFunction } from "./is-function";

/**
 * Checks whether the given value is a function.
 *
 * @param value Everything possible.
 * @returns whether the value of the given variable is a function.
 *
 * @see isFunction
 */
export function isFunc(value: any): value is Func {
  return isFunction(value);
}
