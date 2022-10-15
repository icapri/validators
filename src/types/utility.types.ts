/**
 * Represents the type of a constructable.
 */
export type ConstructorType<T = any> = new (...args: any[]) => T;

/**
 * Represents a falsy type i. e. one of the nulls of the fields.
 */
export type Falsy = false | "" | 0 | 0n | null | undefined;

/**
 * Represents the signature of a function.
 */
export type Func<TArgs extends Array<any> = Array<any>, TReturnType = any> = (
  ...args: TArgs
) => TReturnType;

/**
 * Represents the primitive types.
 */
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;

/**
 * Represents a string with at least one white-space in it.
 */
export type StringWithSpaces = ` ${string}` | `${string} ` | ` ${string} `;

/**
 * Represents a truthy type.
 */
export type Truthy<T> = T extends false | "" | 0 | 0n | null | undefined
  ? never
  : T;
