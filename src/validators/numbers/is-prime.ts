import {isNumber} from './is-number';

/**
 * Checks whether the given number is prime.
 *
 * @param {Number} value Contains some number.
 * @return {Boolean} whether the given number is prime.
 */
export function isPrime(value: number): value is number {
  // it is still important to check whether a number has
  // been given as a parameter because in many cases stuff
  // is passed as `any` and besides this method accepts numbers
  // only, it also accepts `any`
  if (!isNumber(value) || value < 2) {
    return false;
  }

  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return value !== 1 && value !== 0;
}
