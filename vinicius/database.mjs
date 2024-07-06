import { Character, Monster } from "./classes.mjs";

export const vocations = [
  {
    name: "Arqueiro",
    atkMultiplier: 1.5,
    spellMultiplier: 1.0,
    lifeMultiplier: 1.4,
    spells: [
      {
        name: "firebolt",
        manaCost: 10,
        baseDamage: 30,
        damageType: ["physical", "fire"],
        manaCost: 30,
        minLevel: 10,
        minMagicLevel: 4
      },
      {
        name: "icebolt",
        manaCost: 10,
        baseDamage: 40,
        damageType: ["physical", "ice"],
        manaCost: 40,
        minLevel: 15,
        minMagicLevel: 7
      },
  ],
  },
  {
    name: "Guerreiro",
    atkMultiplier: 3.5,
    spellMultiplier: 1.1,
    lifeMultiplier: 2.0,
  },
  {
    name: "Mago",
    atkMultiplier: 1.1,
    spellMultiplier: 2.0,
    lifeMultiplier: 1.2,
  },
];

export const weaponTypes = [
  {
    name: "Espada",
    isTwoHanded: false,
  },
  {
    name: "Arco",
    isTwoHanded: true,
  },
  {
    name: "Machado",
    isTwoHanded: false,
  },
  {
    name: "Cajado",
    isTwoHanded: false,
  },
  {
    name: "Lança",
    isTwoHanded: true,
  },
  {
    name: "Espada Longa",
    isTwoHanded: true,
  },
  {
    name: "Machado de Duas Maos",
    isTwoHanded: true,
  },
];

const monsterNames = [
  'Dragon', 'Goblin', 'Troll', 'Orc', 'Vampire', 'Werewolf', 'Zombie', 'Skeleton', 'Ghost', 'Demon',
  'Harpy', 'Griffin', 'Minotaur', 'Cyclops', 'Manticore', 'Basilisk', 'Hydra', 'Gargoyle', 'Chimera', 'Phoenix',
  'Kraken', 'Leviathan', 'Golem', 'Elemental', 'Wraith', 'Lich', 'Banshee', 'Naga', 'Ogre', 'Kobold',
  'Gnoll', 'Giant', 'Wyvern', 'Sphinx', 'Djinn', 'Rakshasa', 'Succubus', 'Incubus', 'Cerberus', 'Centaur'
];

// Função para gerar um valor aleatório entre min e max
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export let monsters = []

// Gerando uma lista grande de monstros
for (let i = 0; i < monsterNames.length; i++) {
  let name = monsterNames[i];
  let level = getRandomValue(1, 100);
  let health = getRandomValue(50, 1000);
  let attack = getRandomValue(10, 100);
  let defense = getRandomValue(5, 50);
  monsters.push(new Monster(name, level, health, attack, defense));
}