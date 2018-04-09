"use strict"

/**
 * @author: Iswanul Umam  
 */

class Animal {
  constructor(numLegs, isWarmBlooded) {
    this.numLegs = numLegs;
    this.isWarmBlooded = isWarmBlooded;
  }
}

// ----------------------------------------

class Frog extends Animal {
  constructor(numLegs, isWarmBlooded) {
    super(numLegs, isWarmBlooded);
  }
}

console.log('# frog');
let frog = new Frog(4, false);
console.log(frog);

// ----------------------------------------

class Bat extends Animal {
  constructor(numLegs, isWarmBlooded) {
    super(numLegs, isWarmBlooded);
  }
}

console.log('# bat');
let bat = new Bat(2, true);
console.log(bat);

// ----------------------------------------

class Chimpanzee extends Animal {
  constructor(numLegs, isWarmBlooded) {
    super(numLegs, isWarmBlooded);
  }
}

console.log('# Chimpanzee');
let chimpanzee = new Chimpanzee(2, true);
console.log(chimpanzee);

// ----------------------------------------

class Fox extends Animal {
  constructor(numLegs, isWarmBlooded) {
    super(numLegs, isWarmBlooded);
  }
}

console.log('# Fox');
let fox = new Fox(4, true);
console.log(fox);

// ----------------------------------------

class Chicken extends Animal {
  constructor(numLegs, isWarmBlooded) {
    super(numLegs, isWarmBlooded);
  }
}

console.log('# Chicken');
let chicken = new Chicken(2, true);
console.log(chicken);

