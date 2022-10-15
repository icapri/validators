import {Falsy} from '../../utilities/types';

/**
 * Checks whether the given value is truthy i. e. whether it
 * has **none** of the following values:
 * - `false`     Falsy value of the `boolean` primitive type.
 * - `""`        Falsy value of the `string` primitive type.
 * - `0`         Falsy value of the `number` primitive type.
 * - `0n`        Falsy value of the `bigint` primitive type.
 * - `null`      Falsy value of the `null` primitive type.
 * - `undefined` Falsy value of the `undefined` primitive type.
 *
 * @param {*} value Contains the input to be checked whether it represents a
 * non-falsy value.
 * @return {boolean} whether the given input parameter has a non-falsy value.
 *
 * @see hasValue
 */
export function isTruthy<T>(value: T | Falsy): value is T {
  // firstly make sure the value is defined
  if (typeof value !== 'undefined' && value) {
    // the `if` block below evaluates to `true` if the given value
    // is `null`, `undefined`, `NaN`, `''`, 0 or `false`
    if (value) {
      return true;
    }
  }

  return false;
}
