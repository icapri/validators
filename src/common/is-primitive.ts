import { Primitive } from "../types";
import { isNull } from "./is-null";

export function isPrimitive(value: any): value is Primitive {
  const type = typeof value;
  return isNull(value) || [
    'string',
    'number',
    'bigint',
    'boolean',
    'symbol',
    'undefined'
  ].includes(type);
}
