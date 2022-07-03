/**
 * Calls the prototype method which stringifies the constructor.
 *
 * @param {*} value Contains a given value.
 * @return {string} the name of the prototype of the given value.
 */
export function __proto__(value: any): string {
  return Object.prototype.toString.call(value);
}
