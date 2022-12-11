/**
 * Checks whether the HTML element is scrolled to top.
 *
 * @param {HTMLElement} element Contains the HTML element to be checked whether
 * it is scrolled to top.
 * @return {boolean} whether the HTML element is scrolled to top.
 */
export function isTopScrolled(element: HTMLElement): boolean {
  return element.scrollTop === 0;
}
