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