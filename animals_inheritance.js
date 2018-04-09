"use strict"
class Animal {
  constructor(num_legs, is_warm_blooded) {
    this.num_legs = num_legs;
    this.is_warm_blooded = is_warm_blooded
  }
}

class Frog extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
  }
}

class Bat extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
  }
}

class Chimpanzee extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
  }
}

class Fox extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
  }
}

class Chicken extends Animal {
  constructor(num_legs, is_warm_blooded) {
    super(num_legs, is_warm_blooded);
  }
}

const frog = new Frog(2, false);
const bat = new Bat(2, true);
const chimpanzee = new Chimpanzee(2, false);
const fox = new Fox(4, false);
const chicken = new Chicken(2, false)
console.log(frog)
console.log(bat)
console.log(chimpanzee)
console.log(fox)
console.log(chicken)

