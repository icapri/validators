import { isSet } from "./is-set";

export function isEmptySet<T, U>(value: T | Set<U>): value is Set<U> {
  return isSet(value) && value.size === 0;
}
