import { isNull } from "../common/is-null";
import { isString } from "./is-string";

export function isWhitespace(value: any): value is string {
  return isString(value) && !isNull(value.match(/^ *$/));
}
