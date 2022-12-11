/**
 * Checks whether a string is a valid email address.
 *
 * @param {string} value Contains the value to be checked whether it is a
 * valid email.
 * @return {boolean} whether the value has the correct format of an email.
 */
export function isEmail(value: string): boolean {
  return (
    String(value)
      // eslint-disable-next-line max-len
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != null
  );
}
