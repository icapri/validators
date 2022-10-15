/**
 * Checks whether the given object contains the given property.
 *
 * @param {Object} value Contains some object.
 * @param {*} key Contains some key
 * @return {Boolean} whether the given key is key of the given object.
 */
export function hasProperty<TValue extends object, TKey extends keyof TValue>(
  value: TValue,
  key: string | symbol | number,
): key is TKey {
  return Object.prototype.hasOwnProperty.call(value, key);
}
