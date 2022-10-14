import { isUndefined } from "./is-undefined";

export function isDefined<T>(value: T | undefined): value is T {
  return !isUndefined(value);
}
