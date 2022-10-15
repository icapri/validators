import { isBoolean } from "./is-boolean";

export function isBool(value: any): value is boolean {
  return isBoolean(value);
}
