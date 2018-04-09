"use strict"

class Animals {
  constructor(legs, blood) {
    this.legs = legs
    this.is_warm_blood = blood
    this.superpower = new SuperPower()
  }
}

class Frog extends Animals {
  constructor(legs, blood) {
    super(legs, blood)
  }
}

class Bat extends Animals {
  constructor(legs, blood) {
    super(legs, blood)
  }
}

class Chimpanzee extends Animals {
  constructor(legs, blood) {
    super(legs, blood)
  }
}

class Fox extends Animals {
  constructor(legs, blood) {
    super(legs, blood)
  }
}

class Chicken extends Animals {
  constructor(legs, blood) {
    super(legs, blood)
  }
}

class SuperPower {
  constructor() {
    this.super = ''
  }

  use_laser_vision(){

    console.log(`Jurus laser asmara!`);

  }

  be_invisible(){

    console.log(`Jurus menghilang dari muka bumi!`);

  }

}


const chicken = new Chicken(2, false)

chicken.superpower.use_laser_vision()
