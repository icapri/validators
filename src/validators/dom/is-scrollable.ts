/**
 * Represents the scroll axis of the element.
 */
export type ScrollAxis = 'x' | 'y';

/**
 * Checks whether the HTML element is scrollable.
 *
 * @param {HTMLElement} element Contains the HTML element to be checked whether
 * it is scrollable.
 * @param {ScrollAxis} axis Contains the scroll axis.
 * @return {boolean} whether the HTML element is scrollable.
 */
export function isScrollable(element: HTMLElement, axis?: ScrollAxis): boolean {
  const isOverflowX = ['scroll', 'auto'].includes(element.style.overflowX);
  const isOverflowY = ['scroll', 'auto'].includes(element.style.overflowY);
  const scrollWidth = element.scrollWidth;
  const clientWidth = element.clientWidth;
  const scrollHeight = element.scrollHeight;
  const clientHeight = element.clientHeight;

  if (axis === 'x') {
    return isOverflowX && scrollWidth > clientWidth;
  }

  if (axis === 'y') {
    return isOverflowY && scrollHeight > clientHeight;
  }

  const isScrollableX = isOverflowX && scrollWidth > clientWidth;
  const isScrollableY = isOverflowY && scrollHeight > clientHeight;
  return isScrollableX || isScrollableY;
}
