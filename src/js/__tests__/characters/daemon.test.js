import { expect, test } from '@jest/globals';
import Daemon from '../../characters/Daemon';

test('open_Daemon', () => {
  const hero = new Daemon('newPerson');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
    _stoned: false,
  });
});

test('attack-with-stoned', () => {
  const hero = new Daemon('newPerson');
  hero.stoned = true;
  hero.attack = 65;
  expect(hero.actionAttack(5)).toBe(27);
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Daemon',
    health: 100,
    level: 1,
    attackDistance: 5,
    defence: 40,
    _stoned: true,
    attack: 65,
  });
});

test('attack-without-stoned', () => {
  const hero = new Daemon('newPerson');
  hero.attack = 65;
  expect(hero.actionAttack(5)).toBe(39);
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Daemon',
    health: 100,
    level: 1,
    attackDistance: 5,
    defence: 40,
    _stoned: false,
    attack: 65,
  });
});
