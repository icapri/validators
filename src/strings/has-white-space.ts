import { isString } from "./is-string";

type StringWithSpaces = ` ${string}` | `${string} ` | ` ${string} `;

export function hasWhiteSpace(value: string): value is StringWithSpaces {
  return isString(value) && value.indexOf(" ") >= 0;
}
