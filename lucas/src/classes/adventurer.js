import { readDatabase, writeDatabase } from "../write_database.js"

export class Adventurer {
  constructor (data) {
    const { name, occupation, weapon } = data

    this.name           = name
    this.exp            = 0
    this.level          = 1
    this.rank           = 'E'
    this.occupation     = occupation
    this.life           = 50
    this.strength       = 10
    this.defence        = 10
    this.agility        = 20
    this.intelligence   = 10
    this.precision      = 9
    this.healingFactor  = 1.2
    this.hunger         = 0
    this.skillPoints    = 0
    this.inventory      = {
      items: [],
      food: [],
      equipments: [],
      weapons: [
        weapon
      ],
      money:{
        gold: 0,
        silver: 0,
        bronze: 0,
      }
    }
  }

  create_adventurer() {
    const database = readDatabase();

    const findAdventureByName = database.characters.find(character => character.name === this.name)

    if (findAdventureByName) {
      console.log("Adventurer already exists")
      return
    }

    database.characters.push({
      id: database.characters.length + 1,
      name: this.name,
      occupation: this.occupation,
      level: this.level,
      exp: this.exp,
      rank: this.rank,
      life: this.life,
      strength: this.strength,
      agility: this.agility,
      intelligence: this.intelligence,
      precision: this.precision,
      healing_factor: this.healingFactor,
      hunger: this.hunger,
      skill_points: this.skillPoints,
      inventory: this.inventory,
    })

    writeDatabase(database)
    console.log("Adventurer created")
    this.me()
    this.statistics()
  }

  me() {
    console.log(`Character Info:\n Name: ${this.name}\n Class: ${this.occupation}\n Rank: ${this.rank}\n Level: ${this.level}\n`)
  }

  statistics() {
    console.log(`Statistics:\n Life: ${this.life}\n Strength: ${this.strength}\n Agility: ${this.agility}\n Intelligence: ${this.intelligence}\n Precision: ${this.precision}\n`)
  }

  attackMonster(monster) {
    const damage = Math.floor((this.strength * this.precision) / monster.defence)
    monster.life -= damage
    
    if (this.life <= 0) {
      this.isDead = true
      console.log(`${this.name} is dead`)
      return
    }

    if (monster.life <= 0) {
      monster.isDead = true
      console.log(`${monster.name} is dead`)
      return
    }

    console.log(`${this.name} attacks ${monster.name} - Damage: ${damage}\n`)

    return monster;life
  }

  experienceForNextLevel(adventurer) {
    console.log((50 * (adventurer.level) * (adventurer.level) * (adventurer.level) - 150 * (adventurer.level) * (adventurer.level) + 400 * (adventurer.level)) / 3)
  }

  
}