import { isNull } from "./is-null";

export function isPrimitive(value: any): value is string | number | bigint | boolean | symbol | null | undefined {
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
