import {hasProperty} from '../..';

/**
 * Test class
 */
class User {
  name: string = 'John';
}

test('hasProperty()', () => {
  expect(hasProperty({name: 'sdc'}, 'name')).toBeTruthy();
  expect(hasProperty({}, 'someProp')).toBeFalsy();
  expect(hasProperty(new User(), 'name')).toBe(true);
});
