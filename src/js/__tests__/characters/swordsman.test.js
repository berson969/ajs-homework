import { expect, test } from '@jest/globals';
import Swordsman from '../../characters/Swordsman';

test('open_Swordsman', () => {
  const hero = new Swordsman('newPerson');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
