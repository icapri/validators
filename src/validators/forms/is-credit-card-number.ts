import {isArray} from '../collections/is-array';
import {isEmptyArray} from '../collections/is-empty-array';
import {isNil} from '../common/is-nil';
import {isString} from '../strings/is-string';

/**
 * Defines the credit card types.
 */
export abstract class CreditCardType {
  // eslint-disable-next-line max-len
  public static readonly MasterCard: RegExp = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/gm;
  public static readonly AmericanExpress: RegExp = /^3[47][0-9]{13}$/gm;
  public static readonly Visa: RegExp = /^4[0-9]{12}(?:[0-9]{3})?$/gm;
  // eslint-disable-next-line max-len
  public static readonly Discover: RegExp = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/gm;
  // eslint-disable-next-line max-len
  public static readonly Maestro: RegExp = /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/gm;
  public static readonly JCB: RegExp = /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/gm;
  // eslint-disable-next-line max-len
  public static readonly DinersClub: RegExp = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/gm;
}

/**
 * Checks whether the value is a valid credit card number.
 *
 * @param {string | number} value Contains the value to be checked whether it
 * is a valid credit card number.
 * @param {CreditCardType | CreditCardType[]} accepts Contains the accepted
 * credit card types. Unless, defined, all the credit card types are checked.
 * @return {boolean} whether the given value is a valid credit card number.
 */
export function creditCardNumber(
  value: string | number,
  accepts?: CreditCardType | CreditCardType[],
): boolean {
  const val = isString(value) ?
    value.replace(/\s/g, '').replace(/[^0-9]/g, '') : value.toString();
  const all = isNil(value) || isEmptyArray(accepts);
  if (all) {
    return Object.values(CreditCardType).some((c: RegExp) => val.match(c));
  }

  if (accepts instanceof RegExp) {
    return val.match(accepts) !== null;
  }

  if (isArray(accepts)) {
    return accepts.some((c): c is RegExp => val.match(c as RegExp) !== null);
  }

  return false;
}
