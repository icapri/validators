import { isNumber } from "./is-number";

export function isOdd(value: any): value is number {
  return isNumber(value) && Math.abs(value % 2) === 1;
}
