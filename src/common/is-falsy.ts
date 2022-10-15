import { Falsy } from "../types";

export function isFalsy<T>(value: T | Falsy): value is Falsy {
  // make sure that the value is defined and falsy
  return typeof value === 'undefined' || !value;
}
