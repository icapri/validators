import {Primitive} from '../../utilities/types';
import {isNull} from './is-null';

/**
 * Checks whether the given value is of primitive type i. e. `string`,
 * `number`, `bigint`, `boolean`, `null`, `symbol` or `undefined`.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {Boolean} whether the given value is of primitive type i. e.
 * `string`, `number`, `bigint`, `boolean`, `null`, `symbol` or `undefined`.
 */
export function isPrimitive(value: any): value is Primitive {
  const type = typeof value;
  return isNull(value) || [
    'string',
    'number',
    'bigint',
    'boolean',
    'symbol',
    'undefined',
  ].includes(type);
}
