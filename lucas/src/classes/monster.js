export class Monster {
  constructor() {
    this.name = 'Goblin'
    this.level = 1
    this.exp = 0
    this.rank = 'E'
    this.life = 50
    this.attack = 10
    this.defence = 10
    this.strength = 10
    this.precision = 7
  }

  attackAdventurer(adventurer) {
    const damage = Math.floor((this.strength * this.precision) / adventurer.defence)
    if (adventurer.life > 0) {
      if (damage >= adventurer.life) {
        damage = adventurer.life
        adventurer.life -= damage
        adventurer.isDead = true
      } else {
        adventurer.life -= damage
      }
    } else {
      console.log(`${adventurer.name} is dead.`)
      adventurer.isDead = true
    }

    console.log(`${this.name} attacks ${adventurer.name} - Damage: ${damage}\n`)


    return adventurer.life
  }
}