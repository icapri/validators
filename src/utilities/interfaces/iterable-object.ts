/**
 * Defines an iterable object i. e. an object which has among
 * the other properties a property `Symbol.iterator` which
 * returns the iterable values of the object. There are
 * several built-in objects like `Array`, `Int32Array`, `Map`
 * etc. which contain such property. Even `String` has this
 * property. The aforementioned objects implement the generic
 * interface `Iterable<T>` which defines such a property.
 */
export interface IterableObject<T = any> extends Iterable<T> {
  /**
   * Contains the number of iterable values in the object. This
   * property exists e. g. in `Array`.
   */
  length?: number

  /**
   * Contains the number of iterable values in the object. This
   * property exists e. g. in `Map`.
   */
  size?: number
}
