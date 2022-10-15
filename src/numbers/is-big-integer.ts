import { isBigInt } from "./is-bigint";

export function isBigInteger(value: any): value is bigint {
  return isBigInt(value);
}
