export class Character {
  constructor(name, vocation) {
    this.name = name;
    this.vocation = vocation;
    this.baseLife = 50;
    this.level = 1;
    this.life = this.baseLife * vocation.lifeMultiplier * this.level;
    this.baseATK = 20;
    this.experience = 0;
    this.experienceStage = 0
    this.experienceToLevelUp = this.experienceForNextLevel();
    this.magicLevel = 1;
    this.mana = 100;
    this.equippedWeapons = [];
    this.spells = this.vocation.spells;
    this.cast = null;
    this.bag = [];
    this.castingSpells = [];
    this.updateAtk();
  }

  experienceForNextLevel() {
    return (50 * (this.level) * (this.level) * (this.level) - 150 * (this.level) * (this.level) + 400 * (this.level)) / 3
}
  getStats() {
    console.log(
      `NOME: ${this.name}, VOCAÇÃO: ${this.vocation.name}, ATAQUE BASE: ${this.baseATK}, SPELLS: `
    );
    this.vocation.spells.forEach((spell, index, a) => {
      console.log(`- ${JSON.stringify(spell.name)} - ${JSON.stringify(spell)}`);
    });
    console.log(`EXP TO NEXT LEVEL: ${this.experienceToLevelUp - this.experience}`);
  }

  attackMonster(monster) {
    // ? monster.life = 0
    // : console.log(`${this.name} atacou ${monster.name}!`);

    let combat = this.atk - monster.defence;
    // monster.life -= combat;
    if (monster.life > 0) {
      if (combat >= monster.life) {
        combat = monster.life;
        monster.life -= combat;
        monster.isDead = true;

        this.experience += monster.experience;
        this.levelUp()
      } else {
        monster.life -= combat;
      }
    } else {
      console.log(`${monster.name} morreu.`);
      monster.isDead = true;
      this.experience += monster.experience;
      this.levelUp()
    }
    
  }

  equipWeapon(weapon) {
    if (this.bag.includes(weapon)) {
      this.equippedWeapons.push(weapon);
      this.bag.splice(this.bag.indexOf(weapon), 1);
      this.atk += weapon.atk * this.vocation.atkMultiplier * this.level;
      console.log(`${this.name} equipou a arma ${weapon.name}.`);
    } else {
      console.log(`${weapon.name} não está na bag.`);
    }
  }

  unequipWeapon(weapon) {
    if (this.equippedWeapons.includes(weapon)) {
      this.bag.push(weapon);
      this.equippedWeapons.splice(this.equippedWeapons.indexOf(weapon), 1);
      this.atk -= weapon.atk * this.vocation.atkMultiplier * this.level;
      console.log(`${this.name} desequipou a arma ${weapon.name}.`);
    } else {
      console.log(`${weapon.name} não está equipada.`);
    }
  }
  updateAtk() {
    let totalAtk = this.baseATK;
    this.equippedWeapons.forEach((weapon) => {
      totalAtk += weapon.atk;
    });
    this.atk = totalAtk * this.vocation.atkMultiplier * this.level;
  }

  grabWeapon(weapon) {
    this.bag.push(weapon);
  }

  spellCast(spell, monster) {
    let spellTrue = this.spells.map((element) =>
      element.name.includes(spell) != false && element,
      
  );
  let spellToCast = spellTrue.find((element) => element);
  let spellCombatDamage = spellToCast.baseDamage * this.magicLevel;
  let minLevel = spellToCast.minLevel > this.level;
  let minMagicLevel = spellToCast.minMagicLevel > this.magicLevel;

    console.log(spellToCast);

    if (minLevel || minMagicLevel) {
      minLevel
        ? console.log(`Nível insuficiente.${spellToCast.minLevel}`)
        : console.log(`Magic level insuficiente.${spellToCast.minMagicLevel}`);
    } else if (
      // spellToCast &&
      spellToCast.manaCost <= this.mana &&
      spellToCast.minLevel <= this.level
    ) {
      this.mana -= spellToCast.manaCost;
      monster.life -= spellToCast.baseDamage * this.magicLevel;
      console.log(`Você causou ${spellCombatDamage} de dano ao monstro ${monster.name}, e agora ele está com ${monster.life} de vida.`);
    }
  }

  levelUp() {
    let oldLevel = this.level
    for (let i = 0; this.experience >= this.experienceToLevelUp; i++) {
      console.log(this.level, this.experienceToLevelUp)
      if(this.experience >= this.experienceToLevelUp) {
        this.level += 1
        this.experienceToLevelUp = this.experienceForNextLevel(this.level)
      }
      //   this.experienceToLevelUp = this.level * 15750 
    }
    console.log(`Parabéns, ${this.name} você foi do nível ${oldLevel} para o nível ${this.level}!`)
      
    // if(this.experience >= this.experienceToLevelUp) {
      
    //   this.level += 1
    
    //   console.log(`Parabéns, ${this.name} atingiu o nível ${this.level}!`)
    // } 
  }
}

export class Monster {
  constructor(name, atk, defence, life, experience) {
    this.name = name;
    this.life = life;
    this.defence = defence;
    this.atk = atk;
    this.experience = experience;
    this.isDead = false;
  }

  getStats() {
    console.log(
      `NOME: ${this.name}, ATAQUE: ${this.atk}, DEFESA: ${this.defence}, VIDA: ${this.life}, EXPERIENCIA: ${this.experience}`
    );
  }
}

export class Weapon {
  constructor(name, atk, type, isTwoHanded, defence) {
    this.name = name;
    this.atk = atk;
    this.type = type;
    this.isTwoHanded = isTwoHanded ? true : false;
    this.defence = defence;
    this.isEquiped = false;
  }
}