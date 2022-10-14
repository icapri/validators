import { hasProperty } from "./has-property";
import { isObject } from "./is-object";

export function isEmptyObject(value: any): value is {} {
  if (!isObject(value)) {
    return false;
  }

  for (const prop in value) {
    if (hasProperty(value, prop)) {
      return false;
    }
  }

  return JSON.stringify(value) === JSON.stringify(value);
}
