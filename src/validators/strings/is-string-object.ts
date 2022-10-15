import { isObject } from "../objects/is-object";

export function isStringObject(value: any): value is String {
  const prototype = Object.prototype.toString.call(value);
  return isObject(value) && prototype === "[object String]";
}
