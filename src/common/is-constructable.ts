import { ConstructorType } from "../types";
import { isConstructor } from "./is-constructor";

export function isConstructable(value: any): value is ConstructorType {
  return isConstructor(value);
}
