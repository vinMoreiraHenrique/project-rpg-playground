import { Adventurer } from "./classes/adventurer.js"
import { Battle } from "./classes/battle.js";
import { Guild } from "./classes/guild.js"
import { Monster } from "./classes/monster.js";
import { readDatabase } from "./write_database.js"

const database = readDatabase();

const guild = new Guild()

const sword = database.weapons.find(weapon => weapon.swords).swords.find(sword => sword.name === "Espada simples")

const adventurer = new Adventurer({
  name: "Oliver",
  occupation: "Guerreiro",
  weapon: sword,
})

// criar personagem
// adventurer.create_adventurer()

// registrar aventureiro
// guild.register_adventure(adventurer)

//
const findAdventurer = database.characters.find(character => character.name === "Oliver")
console.log("----------------------------")
// adventurer.experienceForNextLevel(findAdventurer)

const goblin = new Monster()
const battle = new Battle()

// battle 
battle.combat(adventurer, goblin)