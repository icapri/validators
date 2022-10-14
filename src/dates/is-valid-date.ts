import { isDate } from "./is-date";

export function isValidDate(value: any): value is Date {
  return isDate(value) && !isNaN(value.getTime());
}
