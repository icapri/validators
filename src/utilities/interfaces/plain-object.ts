import {Key} from '../types';

/**
 * Defines a plain object also known as POJO (Plain Old JavaScript Object)
 * which is the simplest type of object, just some key-value pairs.
 */
export interface PlainObject<T = any> {
  /**
   * Contains a definition for the object properties.
   */
  [key: Key]: T
}
