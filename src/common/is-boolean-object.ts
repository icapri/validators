import { isObject } from "../objects/is-object";

export function isBooleanObject(value: any): value is Boolean {
  return isObject(value) && typeof value.valueOf() === "boolean";
}
