import { expect, test } from '@jest/globals';
import Zombie from '../../characters/Zombie';

test('open_Zombie', () => {
  const hero = new Zombie('newPerson');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
