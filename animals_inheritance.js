/*jshint esversion:6*/

class Animal {
  constructor(){
    this.eyes = 2;
    this.num_legs = 2;
    this.is_warm_blooded = true;
    this.superpower = new SuperPower();
   }
}

class Bat extends Animal{
  constructor(){
    super();
  }
}

class Chicken extends Animal{
  constructor(){
    super();
  }
}

class Chimpanzee extends Animal{
  constructor(){
    super();
  }
}

class Fox extends Animal{
  constructor(){
    super();
    this.num_legs = 4;
    this.is_warm_blooded = false;
  }
}

class SuperPower{
  use_laser_vision(){
    return 'Pew Pew Pew Pew';
  }
}


let kampret = new Bat();
let rubah = new Fox();
console.log(rubah);
console.log(kampret);
console.log(rubah.superpower.use_laser_vision());
