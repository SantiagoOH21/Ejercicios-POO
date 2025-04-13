class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }
  attack = () => {
    return this.power;
  };
  defend = (damage) => {
    this.life -= damage;
    console.log(this.life);
  };
}

class Maya extends Warrior {
  constructor() {
    super(100, 15);
  }
  drinkColaCao = () => {
    this.power += 10;
  };
}

class Azteca extends Warrior {
  constructor() {
    super(110, 10);
  }
  drinkNesquik = () => {
    this.life += 10;
  };
}

const myMaya = new Maya();
const myAzteca = new Azteca();

myAzteca.drinkNesquik();
myMaya.drinkColaCao();
console.log("Vida del Azteca: ");
myAzteca.defend(myMaya.attack());
console.log("Vida del Maya: ");
myMaya.defend(myAzteca.attack());
