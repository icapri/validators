/**
 * Represents the type of a constructable.
 */
export type Constructable<T = any> = new (...args: any[]) => T;
