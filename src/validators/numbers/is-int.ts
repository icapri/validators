import { isInteger } from "./is-integer";

export function isInt(value: any): value is number {
  return isInteger(value);
}
