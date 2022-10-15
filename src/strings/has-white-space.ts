import { StringWithSpaces } from "../types";
import { isString } from "./is-string";

export function hasWhiteSpace(value: string): value is StringWithSpaces {
  return isString(value) && value.indexOf(" ") >= 0;
}
