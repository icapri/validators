import { isNumber } from "./is-number";

export function isInteger(value: any): value is number {
  return isNumber(value) && Math.floor(value) === value;
}
