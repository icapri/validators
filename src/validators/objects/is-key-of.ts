import { hasProperty } from "./has-property";

export function isKeyOf<TObject extends object>(
  object: TObject,
  key: number | string | symbol
): key is keyof TObject {
  return hasProperty(object, key);
}
