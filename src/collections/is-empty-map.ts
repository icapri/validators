import { isMap } from "./is-map";

export function isEmptyMap<T, U, V>(value: T | Map<U, V>): value is Map<U, V> {
  return isMap(value) && value.size === 0;
}
