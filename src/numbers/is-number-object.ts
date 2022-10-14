import { isObject } from "../objects/is-object";

export function isNumberObject(value: any): value is Number {
  const prototype = Object.prototype.toString.call(value);
  return isObject(value) && prototype === "[object Number]";
}
