"use strict"
class Animal{
  constructor(numLegs, isMammals){
    this.num_legs = numLegs
    this.is_warm_blood = true
    this.is_mammals = isMammals
  }

  superpower(){
    return new SuperPower()
  }
}

class Cow extends Animal {
  constructor() {
    super()
  }
}

class Fox extends Animal {
  constructor() {
    super()
  }
}

class Frog extends Animal {
  constructor(num_legs, is_mammals) {
    super(num_legs, is_mammals)
  }
}

class Duck extends Animal {
  constructor(num_legs, is_mammals) {
    super(num_legs, is_mammals)
  }

}

class SuperPower {
  constructur(){

  }

  use_laser_vision(){
    console.log('Serangan laseeer......');
  }

  be_invisible(){
    console.log('Aku menghilang....');
  }

}

//===========Driver Code========
let duck = new Duck(2, false)
console.log(duck);
duck.superpower().use_laser_vision();
