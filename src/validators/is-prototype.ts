import {hasValue} from './has-value';
import {isFunc} from './is-func';

/**
 * Checks whether the given value is a prototype.
 *
 * @param {*} value Contains the value to be checked whether it is a prototype.
 * @return {boolean} whether the given value is a prototype.
 */
export function isPrototype(value: any): boolean {
  const Ctor = hasValue(value) && value.constructor;
  const prototype = Object.prototype || (isFunc(Ctor) && Ctor.prototype);
  return value === prototype;
}
