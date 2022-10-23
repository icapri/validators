import { isConstructor } from './is-constructor';

class User {
  private _username?: string;
  constructor(username?: string) {
    this._username = username;
  }
}

abstract class User1 {

}

const V1: new(...args: any[]) => any = User;
const V2: new(...args: any[]) => any = Object;

test('isConstructor()', () => {
  expect(isConstructor(V1)).toBe(true);
  expect(isConstructor(V2)).toBe(true);
  expect(isConstructor(User1)).toBe(true);
});
