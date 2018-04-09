// "use strict"
class Animal {
  constructor(num_legs,is_warm_blooded) {
    this.num_legs= 4
    this.is_warm_blooded= is_warm_blooded
  }
}

class Monkey extends Animal {
  constructor() {
    super(2,true)
    this.num_legs = 2
  }
}

class Chicken extends Animal{
  constructor() {
    super (2,true)
    this.num_legs = 2
  }
}

class Cow extends Animal {
  constructor() {
    super(4,true)
  }
}

var animal = new Animal()
var monkey = new Monkey()
var chicken = new Chicken()
var cow = new Cow()
// console.log(animal);
console.log(monkey);
console.log(chicken);
console.log(cow);
