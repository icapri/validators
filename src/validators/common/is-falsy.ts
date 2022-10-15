import {Falsy} from '../../utilities/types';

/**
 * Checks whether the given value is falsy i. e. whether it
 * has one of the following values:
 * - `false`     Falsy value of the `boolean` primitive type.
 * - `""`        Falsy value of the `string` primitive type.
 * - `0`         Falsy value of the `number` primitive type.
 * - `0n`        Falsy value of the `bigint` primitive type.
 * - `null`      Falsy value of the `null` primitive type.
 * - `undefined` Falsy value of the `undefined` primitive type.
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is falsy.
 */
export function isFalsy<T>(value: T | Falsy): value is Falsy {
  // make sure that the value is defined and falsy
  return typeof value === 'undefined' || !value;
}
