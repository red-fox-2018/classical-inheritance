"use strict"

class Animal {
  constructor(leg, blood){
    this.num_legs = leg
    this.is_warm_blooded = blood
    this.superpower = new SuperPower()
  }
}

class Frog extends Animal {
  constructor(leg, blood) {
    super(leg, blood)
  }
}

class Bat extends Animal {
  constructor(leg, blood) {
    super(leg, blood)
  }
}

class Chimpanzee extends Animal {
  constructor(leg, blood) {
    super(leg, blood)
  }
}

class Fox extends Animal {
  constructor(leg, blood) {
    super(leg, blood)
  }
}

class Chicken extends Animal {
  constructor(leg, blood) {
    super(leg, blood)
  }
}

class SuperPower {
  constructor() {

  }

  use_laser_vision(){
    return 'laser vision!!'
  }

  be_invisible(){
    return 'invisible!!'
  }

  fly(){
    return 'can fly!!'
  }

  fire_breathe(){
    return 'fire breathe!!'
  }
}


let frog = new Frog(4, 'cold-blooded')
let bat = new Bat(2, 'neither warm or cold')
let chimpanzee = new Chimpanzee(2, 'warm-blooded')
let fox = new Fox(4, 'warm-blooded')
let chicken = new Chicken(2, 'warm-blooded')

let superpower = new SuperPower()

console.log(chicken.superpower.fly());
