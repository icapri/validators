/**
 * Checks whether the HTML element is scrolled to bottom.
 *
 * @param {HTMLElement} element Contains the HTML element to check whether
 * it is scrolled to bottom.
 * @return {boolean} whether the given HTML element is scrolled to bottom.
 */
export function isBottomScrolled(element: HTMLElement): boolean {
  const _ = element.scrollHeight - element.clientHeight - element.scrollTop;
  return Math.abs(_) < 1;
}
