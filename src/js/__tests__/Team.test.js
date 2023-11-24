import { expect, test } from '@jest/globals';
import Team from '../Team';
import Magician from '../characters/Magician';
import Bowman from '../characters/Bowman';

test('add-member', () => {
  const member = new Bowman('bowman');
  const team = new Team();
  team.add(member);
  expect(team.members).toEqual(new Set([
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'bowman',
      type: 'Bowman',
    }]));
});

test('add-same-member', () => {
  const member = new Bowman('bowman');
  const team = new Team();
  team.add(member);
  expect(() => team.add(member)).toThrow(
    'Character already exists in the team.',
  );
});

test('create-team', () => {
  const member1 = new Bowman('bowman');
  const member2 = new Magician('magician');
  const team = new Team();
  team.addAll(member1, member2);

  expect(team.members).toEqual(new Set([
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'bowman',
      type: 'Bowman',
    },
    {
      attack: 10,
      _stoned: false,
      defence: 40,
      health: 100,
      level: 1,
      name: 'magician',
      type: 'Magician',
    },
  ]));
});

test('add-same-member-for-addAll', () => {
  const member1 = new Bowman('bowman');
  const member2 = new Magician('magician');
  const team = new Team();
  team.addAll(member1, member2, member1);
  expect(team.members).toEqual(new Set([
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'bowman',
      type: 'Bowman',
    },
    {
      attack: 10,
      _stoned: false,
      defence: 40,
      health: 100,
      level: 1,
      name: 'magician',
      type: 'Magician',
    },
  ]));
});

test('team-toArray', () => {
  const member1 = new Bowman('bowman');
  const member2 = new Magician('magician');
  const team = new Team();
  team.add(member1);
  team.add(member2);
  expect(team.toArray()).toEqual([{
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'bowman',
    type: 'Bowman',
  },
  {
    _stoned: false,
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'magician',
    type: 'Magician',
  }]);
});
