import {setsEqual} from './sets-equal';

const set1: Set<string> = new Set<string>();
const set2: Set<string> = new Set<string>();

const set3: Set<string> = new Set<string>();
set3.add('');

class User {
  username?: string;
  password?: string;
}

const set4: Set<User> = new Set<User>();
set4.add({
  username: 'johndoe',
  password: 'johndoe123'
});
const set5: Set<User> = new Set<User>();
set4.add({
  username: 'johndoe',
  password: 'johndoe123'
});

test('setsEqual()', () => {
  expect(setsEqual(set1, set2)).toBe(true);
  expect(setsEqual(set1, set3)).toBe(false);
  expect(setsEqual(set4, set5)).toBe(false);
});
