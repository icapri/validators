import { Falsy } from "../types";

export function isTruthy<T>(value: T | Falsy): value is T {
  // firstly make sure the value is defined
  if (typeof value !== "undefined" && value) {
    // the `if` block below evaluates to `true` if the given value
    // is `null`, `undefined`, `NaN`, `''`, 0 or `false`
    if (value) {
      return true;
    }
  }

  return false;
}
