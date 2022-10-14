import { isDefined } from "../common/is-defined";
import { hasProperty } from "./has-property";
import { isObject } from "./is-object";

export function isPlainObject(value: any): value is { [key: string | symbol | number]: any } {
  if (!isObject(value) || !('constructor' in value)) {
    return false;
  }

  const constructor = value.constructor;
  if (isDefined(constructor)) {
    const prototype = constructor.prototype;
    if (!isObject(prototype) || !hasProperty(prototype, 'isPrototypeOf')) {
      return false;
    }
  }

  return true;
}
