/**
 * Represents the signature of a function.
 */
export type Func<TArgs extends Array<any> = Array<any>, TReturnType = any> = (
  ...args: TArgs
) => TReturnType;
