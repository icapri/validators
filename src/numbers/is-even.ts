import { isNumber } from "./is-number";

export function isEven(value: any): value is number {
  return isNumber(value) && value % 2 === 0;
}
