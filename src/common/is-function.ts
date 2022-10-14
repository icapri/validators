/**
 * Represents the signature of a function.
 */
type Func<TArgs extends Array<any> = Array<any>, TReturnType = any> = (
  ...args: TArgs
) => TReturnType;

/**
 * Checks whether the given value is a function.
 *
 * @param value Everything possible.
 * @returns whether the value of the given variable is a function.
 *
 * @see isFunc
 */
export function isFunction(value: any): value is Func {
  return typeof value === "function";
}

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
