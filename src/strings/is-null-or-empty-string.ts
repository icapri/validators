import { isNull } from "../common/is-null";
import { isEmptyString } from "./is-empty-string";

export function isNullOrEmptyString(value: any): value is null | '' {
  return isNull(value) || isEmptyString(value);
}
