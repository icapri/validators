import { isEven } from "./is-even";
import { isNumber } from "./is-number";

export function isPrime(value: any): value is number {
  if (!isNumber(value) || value < 2) {
    return false;
  }

  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return value !== 1 && value !== 0;
}
