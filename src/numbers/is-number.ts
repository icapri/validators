export function isNumber(value: any): value is number {
  return typeof value === 'number' && isFinite(value);
}
