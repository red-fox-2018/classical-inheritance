"use strict"

class Animals {
  constructor() {
    this.num_legs = 4;
    this.is_warm_blooded = false;
  }
}

class Frog extends Animals {
  constructor() {
    super();
    this.superPower = new SuperPower();
  }
}

class Bat extends Animals {
  constructor() {
    super();
    this.is_warm_blooded = true;
  }
}

class Chimpanzee extends Animals {
  constructor() {
    super();
    this.num_legs = 2;
    this.superPower = new SuperPower();
  }
}

class Fox extends Animals {
  constructor() {
    super();
    this.is_warm_blooded = true;
    this.superPower = new SuperPower();
  }
}

class Chicken extends Animals {
  constructor() {
    super();
    this.num_legs = 2;
  }
}

class SuperPower {
  use_laser_vision() {
    return 'use laser vision !'
  }

  be_invisible() {
    return 'invisibility!';
  }

  jumper() {
    return 'jump!'
  }
}

var fox = new Fox()
var chimpanzee = new Chimpanzee();

console.log(fox);
console.log(chimpanzee.superPower.be_invisible());
console.log(fox.superPower.use_laser_vision());
