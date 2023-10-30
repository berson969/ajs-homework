import { expect, test } from '@jest/globals';
import Bowman from '../Bowman';

test('open_Bowman', () => {
  const hero = new Bowman('newPerson');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
