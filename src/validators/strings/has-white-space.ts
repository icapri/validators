import {StringWithSpaces} from '../../utilities/types';
import {isString} from './is-string';

/**
 * Checks whether the given string has white-spaces.
 *
 * @param {*} value Contains some value. Could be everything.
 * @return {StringWithSpaces} whether the given string has white-spaces.
 */
export function hasWhiteSpace(value: string): value is StringWithSpaces {
  return isString(value) && value.indexOf(' ') >= 0;
}
