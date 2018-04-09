"use strict"
class Animals {
  constructor(legsNum, isWarmBlooded){
    this.num_legs = legsNum
    this.is_warm_blooded = isWarmBlooded
  }
}

class Frog extends Animals {
  constructor(legsNum, isWarmBlooded){
    super(legsNum, isWarmBlooded)
  }
}

class Bat extends Animals {
  constructor(legsNum, isWarmBlooded){
    super(legsNum, isWarmBlooded)
  }
}

class Chimpanzee extends Animals {
  constructor(legsNum, isWarmBlooded){
    super(legsNum, isWarmBlooded)
  }
}

class Fox extends Animals {
  constructor(legsNum, isWarmBlooded){
    super(legsNum, isWarmBlooded)
  }
}

class Chicken extends Animals {
  constructor(legsNum, isWarmBlooded){
    super(legsNum, isWarmBlooded)
  }
}

let frog = new Frog (2,false)
let macan = new Animals(4,true)
console.log(frog);
