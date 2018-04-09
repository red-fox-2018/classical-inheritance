/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

`use strict`;

class Animal {
  constructor(num_legs, is_warm_blood) {
    this.num_legs = num_legs;
    this.is_warm_blood = is_warm_blood;
  }
}

class Frog extends Animal {
  constructor() {
    super(4, false);
    this._superpower = new SuperPower(this.constructor.name);
  }

  get superpower() {
    return this._superpower;
  }
}

class Bat extends Animal {
  constructor() {
    super(2, true);
    this._superpower = new SuperPower(this.constructor.name);
  }
  get superpower() {
    return this._superpower;
  }
}

class Chimpanzee extends Animal {
  constructor() {
    super(4, true);
    this._superpower = new SuperPower(this.constructor.name);
  }

  get superpower() {
    return this._superpower;
  }
}

class Fox extends Animal {
  constructor() {
    super(4, true);
    this._superpower = new SuperPower(this.constructor.name);
  }

  get superpower() {
    return this._superpower;
  }
}

class Chicken extends Animal {
  constructor() {
    super(2, true);
    this._superpower = new SuperPower(this.constructor.name);
  }

  get superpower() {
    return this._superpower;
  }
}

class SuperPower {
  constructor(obj) {
    this.obj = obj;
  }

  use_laser_vision() {
    return (this.obj + ` Use Laser Vision! Piew! Piew! Piew!!!!`);
  }

  be_invisible() {
    return this.obj + ` is disapearing! Whoosh!!!`;
  }

  ultra_sound() {
    return this.obj + ` use its ultra sound ability! Twiiiing! Twiiiing!!!`;
  }
}

let frog = new Frog();
let bat = new Bat();
let chicken = new Chicken();
let fox = new Fox();
let chimpanzee = new Chimpanzee();

console.log(frog.superpower.use_laser_vision());
console.log(bat.superpower.ultra_sound());
console.log(chicken.superpower.be_invisible());
console.log(fox.superpower.use_laser_vision());

console.log(fox);
console.log(chimpanzee);
console.log(chicken);
console.log(bat);
console.log(fox);
