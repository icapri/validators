export function isTruthy<T>(
  value: T | false | '' | 0 | 0n | null | undefined
): value is T {
  // firstly make sure the value is defined
  if (typeof value !== 'undefined' && value) {
    // the `if` block below evaluates to `true` if the given value
    // is `null`, `undefined`, `NaN`, `''`, 0 or `false`
    if (value) {
      return true;
    }
  }

  return false;
}