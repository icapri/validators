import { isArray } from "./is-array";

export function isEmptyArray(value: any): value is [] {
  return isArray(value) && value.length === 0;
}
