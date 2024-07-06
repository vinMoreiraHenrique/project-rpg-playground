export class Adventurer {
  constructor (data) {
    const { name, adventureClass } = data

    this.name           = name
    this.exp            = 0
    this.level          = 1
    this.rank           = 'E'
    this.adventureClass = adventureClass
    this.life           = 50
    this.strength       = 30
    this.agility        = 20
    this.intelligence   = 10
    this.precision      = 9
    this.healingfactor  = 1.2
    this.hunger         = 0
    this.skillPoints    = 0
    this.inventory      = {
      items: [],
      food: [],
      equipment: [],
      weapons: [],
      money:{
        gold: 0,
        silver: 0,
        bronze: 0,
      }
    }
  }

  me() {
    console.log(`Character Info:\n Name: ${this.name}\n Class: ${this.adventureClass}\n Rank: ${this.rank}\n Level: ${this.level}\n`)
  }

  statistics() {
    console.log(`Statistics:\n Life: ${this.life}\n Strength: ${this.strength}\n Agility: ${this.agility}\n Intelligence: ${this.intelligence}\n Precision: ${this.precision}\n`)
  }
}