/**
 * Represents the nulls of the fields.
 */
type Empty = null | undefined | '' | 0 | false;

/**
 * Checks whether the input parameter represents an empty value.
 *
 * @param {*} value Contains the value to be checked whether it is empty.
 * @return {boolean} whether the value is empty.
 */
export function isEmpty<T>(value: T | Empty): value is Empty {
  const empty: Array<any> = [null, undefined, NaN, '', 0, false];
  return empty.includes(value);
}
