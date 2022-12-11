/**
 * Represents the scroll axis of the element.
 */
export type ScrollAxis = 'x' | 'y';

/**
 * Checks whether the HTML element is scrollable.
 *
 * @param {HTMLElement} element Contains the HTML element to be checked whether
 * it is scrollable.
 * @param {ScrollAxis} axis Contains the scroll axis. Unless defined, the
 * element is checked whether it is scrollable both vertically and horizontally.
 * @return {boolean} whether the HTML element is scrollable.
 */
export function isScrollable(element: HTMLElement, axis?: ScrollAxis): boolean {
  // the styles of the element
  const style = window.getComputedStyle(element);

  // check whether the HTML element is scrollable horizontally
  if (axis === 'x') {
    return style.overflowX === 'visible';
  }

  // check whether the HTML element is scrollable vertically
  if (axis === 'y') {
    return style.overflowY === 'visible';
  }

  // check whether the HTML element is scrollable either horizontally or
  // vertically
  return style.overflowX === 'visible' || style.overflowY === 'visible';
}
