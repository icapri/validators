/**
 * Represents a type which can also be undefinded.
 */
export type Indefinable<T> = T | undefined;

/**
 * Represents the data types an object key can have.
 */
export type KeyType = string | number | symbol;

/**
 * Represents a type which can also be null.
 */
export type Nullable<T> = T | null;

/**
 * @template T Represents a data type.
 * Represents a type which can be either defined or nullish.
 */
export type Nullish<T> = T | null | undefined;
