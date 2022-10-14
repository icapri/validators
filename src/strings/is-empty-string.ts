import { isString } from "./is-string";

export function isEmptyString(value: any): value is '' {
  return isString(value) && value.length === 0;
}
