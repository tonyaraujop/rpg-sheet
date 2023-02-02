export const player = {
  name: "Tovlax",
  surname: "Brave",
  hp: 10,
  mp: 10,
  level: 1,
  experience: 1,
  attributes: {
    strength: 10,
    wisdom: 10,
    intelligency: 10,
    agility: 10,
    charisma: 10,
    dexterity: 10
  },
  characterClass: 'druid',
  abilities: [
    {
      name: 'Call of the Wild',
      description: 'Invoke forces of the Bear Spirit to enhance strength by 4.',
      manaCost: 2
    },
    {
      name: 'Force of Nature',
      description: 'Invoke forces of the Turtle Spirit to heal HP by 2 points.',
      manaCost: 1
    },
  ]
}
