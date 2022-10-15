/**
 * Checks whether two sets are equal.
 *
 * @param {Set} x Contains some `Set` object.
 * @param {Set} y Contains some other `Set` object.
 * @return {Boolean} whether the two sets equal.
 */
export function setsEqual(x: Set<any>, y: Set<any>): boolean {
  // two sets can't be equal unless their sizes are the same
  if (x.size !== y.size) {
    return false;
  }

  // iterate through the first set and look whether the second
  // set contains all the elements of the first set, otherwise
  // return `false` i. e. break out of the iteration
  return Array.from(x).every((e: any) => y.has(e));
}
