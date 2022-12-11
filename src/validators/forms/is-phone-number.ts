import parsePhoneNumber, {CountryCode} from 'libphonenumber-js';
import {isArray} from '../collections/is-array';
import {isEmptyArray} from '../collections/is-empty-array';
import {isNil} from '../common/is-nil';
import {isNumber} from '../numbers/is-number';

/**
 * Represents the alpha-2 codes of the entire countries in the world.
 */
type CountryAlpha2Code = CountryCode;

/**
 * Checks whether the value is a valid phone number.
 *
 * @param {string | number} value Contains the value to be checked whether it is
 * a valid phone number.
 * @param {CountryAlpha2Code | CountryAlpha2Code[]} accepts Contains the country
 * or countries of which the phone number should be.
 * @return {boolean} whether the value is a valid phone number.
 */
export function isPhoneNumber(
  value: string | number,
  accepts?: CountryAlpha2Code | CountryAlpha2Code[],
): boolean {
  const val = isNumber(value) ? value.toString() : value;
  if (isNil(accepts) || isEmptyArray(accepts)) {
    const phoneNumber = parsePhoneNumber(val);
    return phoneNumber?.isValid() || false;
  }

  return (isArray(accepts) ? accepts : [accepts])
    .some((c) => parsePhoneNumber(val, c)?.isValid());
}

export type {
  CountryAlpha2Code,
};
