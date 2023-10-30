import { expect, test } from '@jest/globals';
import Daemon from '../../characters/Deamon';

test('open_Daemon', () => {
  const hero = new Daemon('newPerson');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
