import { Constructable } from "../../utilities/types";
import { isConstructor } from "./is-constructor";

export function isConstructable(value: any): value is Constructable {
  return isConstructor(value);
}
