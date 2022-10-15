import { ConstructorType } from "../types";

/**
 * Checks whether the given variable has a constructor.
 *
 * @param value Contains some value.
 * @returns whether the given value has a constructor.
 */
export function isConstructor(value: any): value is ConstructorType {
  try {
    // workaround to check whether the constructor of the given value
    // can be called i. e. whether the given value has a constructor,
    // in case the constructor of the given value cannot be called,
    // an error will be thrown, which is caught below in the `catch`
    // block
    new value();
  } catch (error) {
    // the message of the `TypeError` thrown in case the constructor of
    // the given value is not callable
    const message = 'value is not a constructor';
    if (error instanceof TypeError && error.message === message) {
      return false;
    }
  }

  // the given value has a constructor
  return true;
}
