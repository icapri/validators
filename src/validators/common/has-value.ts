import {Falsy} from '../../utilities/types';
import {isTruthy} from './is-truthy';

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
 * @see isTruthy
 */
export function hasValue<T = any>(value: T | Falsy): value is T {
  return isTruthy(value);
}
