import { expect, test } from '@jest/globals';
import Undead from '../Undead';

test('open_Undead', () => {
  const hero = new Undead('newPerson', 'Undead');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
