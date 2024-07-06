import { monsters, monstersNewArray, vocations, weaponTypes } from "./database.mjs";
import { Character, Monster, Weapon } from "./classes.mjs";


const player = new Character("Yoshi", vocations[0]);



const monster = new Monster("Demon", 10, 5, 660, 100);

const newMonster = new Monster("God of Panic", 10, 5, 660, 200);

const weapon = new Weapon("Espada", 100, weaponTypes[0], false, 5);

const weapon2 = new Weapon("Espada", 100, weaponTypes[1], false, 5);

player.grabWeapon(weapon);
player.grabWeapon(weapon2);
player.equipWeapon(weapon);
player.equipWeapon(weapon2);
// player.unequipWeapon(weapon)


export const combatMode = (monsterCreature) => {
  for (let i = 0; monsterCreature.life > 0; i++) {
    let turns = i + " turno(s)";
    console.log(monsterCreature.name);
    console.log(turns)
    
    player.attackMonster(monsterCreature)
    
    monsterCreature.isDead &&
      console.log(
        `Foram necessários ${turns} para o monstro ser derrotado e você ganhou ${monsterCreature.experience} pontos de experiência, agora você tem ${player.experience} pontos de experiência.`
      );
      // console.log(monsterCreature.isDead);
  }
  return;
};

// player.spellCast("firebolt", newMonster);


  combatMode(newMonster);
  // combatMode(monster);
  player.getStats()

// console.log(monsters)

// combatMode();
// combatMode(new Monster ("Demon", 10, 5, 660, 2600));
// combatMode(new Monster ("Demon", 10, 5, 660, 100));
// console.log(player.experience)

// console.log(player, "<-----")
// combatMode(monster);
// console.log(player);
// const {bag, equippedWeapons} = player
// console.log(`BAG: ${bag.map(element => console.log(element))}`)
// console.log(monster.life)

// console.log(player, monster.life)

// player.attackMonster(monster);
// player.attackMonster(monster);
// player.attackMonster(monster);

// console.log(player);
