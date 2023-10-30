import { expect, test } from '@jest/globals';
import Magician from '../../characters/Magician';

test('open_Magician', () => {
  const hero = new Magician('newPerson');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
