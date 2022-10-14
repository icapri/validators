export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

export function isBool(value: any): value is boolean {
  return isBoolean(value);
}
