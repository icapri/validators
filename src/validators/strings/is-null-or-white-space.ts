import { isNull } from "../common/is-null";
import { isWhiteSpace } from "./is-white-space";

export function isNullOrWhiteSpace(value: any): value is null | string {
  return isNull(value) || isWhiteSpace(value);
}
