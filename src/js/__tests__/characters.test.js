import { expect, test } from '@jest/globals';
import {
  Character, Bowman, Magician, Swordsman, Undead, Zombie, Daemon,
} from '../characters';

test('open_Character', () => {
  const hero = new Character('newPerson', 'Bowman');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  });
});

test('short_name', () => {
  const hero = () => new Character('P', 'Bowman');
  expect(hero).toThrow('Wrong size of name');
});

test('long_name', () => {
  const hero = () => new Character('veryLongName', 'Bowman');
  expect(hero).toThrow('Wrong size of name');
});

test('wrong_type', () => {
  const hero = () => new Character('newPerson', 'wrongType');
  expect(hero).toThrow('Wrong type of character');
});

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

test('levelUp_raise', () => {
  const hero = new Bowman('newPerson');
  hero.levelUp();
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('levelUp_no_raise', () => {
  const hero = new Bowman('newPerson');
  hero.health = 0;
  expect(() => hero.levelUp()).toThrow('Impossible to raise the level of dead');
});

test('decrease_health', () => {
  const hero = new Bowman('newPerson');
  hero.damage(20);
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Bowman',
    health: 85,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('damage_for_dead', () => {
  const hero = new Bowman('newPerson');
  hero.health = 0;
  expect(() => hero.damage(20)).toThrow('Character is dead');
});

test('for_became_dead', () => {
  const hero = new Bowman('newPerson');
  expect(() => hero.damage(150)).toThrow('Character is dead');
  expect(hero.health).toBe(0);
});
