import { isFalsy } from "./is-falsy";

type Falsy = false | '' | 0 | 0n | null | undefined;

export function isEmpty<T>(value: T | Falsy): value is Falsy {
  return isFalsy(value);
}
