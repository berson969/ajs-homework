export default function getAttackInfo(character) {
  return character.special.map((attack) => {
    const { description = 'Описание недоступно', ...data } = attack;
    return { description, ...data };
  });
}
