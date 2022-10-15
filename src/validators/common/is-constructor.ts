import {Constructable} from '../../utilities/types';

/**
 * Checks whether the given value can be instantiated i. e.
 * whether it has a constructor.
 *
 * @param {*} Value Contains some value. Could be everything.
 * @return {Boolean} whether the given value can be instantiated i. e.
 * whether it has a constructor.
 *
 * @see isConstructor
 */
export function isConstructor(Value: any): Value is Constructable {
  try {
    // workaround to check whether the constructor of the given value
    // can be called i. e. whether the given value has a constructor,
    // in case the constructor of the given value cannot be called,
    // an error will be thrown, which is caught below in the `catch`
    // block
    new Value();
  } catch (error) {
    // the message of the `TypeError` thrown in case the constructor of
    // the given value is not callable
    const message: string = 'value is not a constructor';
    if (error instanceof TypeError && error.message === message) {
      return false;
    }
  }

  // the given value has a constructor
  return true;
}
