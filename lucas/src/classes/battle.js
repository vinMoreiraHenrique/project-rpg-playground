export class Battle {
  combat (adventurer, monster) {
    console.log(`${adventurer.name} encontrou um ${monster.name}`)

    let adventurerLife = adventurer.life
    let monsterLife = monster.life

    while (adventurerLife > 0 && monsterLife > 0) {
      const monster_life = adventurer.attackMonster(monster)
      monsterLife = monster_life
      if (adventurer.isDead === true) {
        break
      }
      const adventurer_life = monster.attackAdventurer(adventurer)
      adventurerLife = adventurer_life
    }

    if (adventurer.life > 0) {
      // aumentar experiência
    }
  }
}
