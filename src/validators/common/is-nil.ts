import { isNull } from "./is-null";

export function isNil(value: any): value is null {
  return isNull(value);
}
