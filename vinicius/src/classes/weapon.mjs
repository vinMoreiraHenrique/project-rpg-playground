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