import { isNull } from "../common/is-null";
import { isString } from "./is-string";

export function isWhiteSpace(value: any): value is string {
  return isString(value) && !isNull(value.match(/^ *$/));
}
