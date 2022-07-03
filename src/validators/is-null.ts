/**
 * Checks whether the input parameter addresses to some object i. e. ain't null.
 *
 * @param {*} value Contains the value to be checked whether it is null.
 * @return {boolean} whether
 */
export function isNull<T = any>(value: T | null): value is null {
  return value == null;
}
