class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Wrong size of name');
    }
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Wrong type of character');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack = Math.round(this.attack * 1.2);
      this.defence = Math.round(this.defence * 1.2);
      this.health = 100;
    } else {
      throw new Error('Impossible to raise the level of dead');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health <= 0) {
      this.health = 0;
      throw new Error('Character is dead');
    }
  }
}

export default Character;
