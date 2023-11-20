export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Character already exists in the team.');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    /* eslint-disable no-restricted-syntax */
    for (const character of characters) {
      if (this.members.has(character)) {
        throw new Error('Character already exists in the team.');
      }
      this.members.add(character);
    }
    /* eslint-enable no-restricted-syntax */
  }

  toArray() {
    return Array.from(this.members);
  }
}
