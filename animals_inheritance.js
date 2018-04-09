class Animals {
  constructor(legs, blood, fly) {
    this.num_legs = legs;
    this.is_warm_blooded = blood;
    this.can_fly = fly;
  }
}

class Frog extends Animals {
  constructor(legs, blood, fly) {
    super(legs, blood, fly)
  }
}

class Snake extends Animals {
  constructor(legs, blood, fly) {
    super(legs, blood, fly)
  }
}


var frog = new Frog(4, false, false);
var snake = new Snake(0, false, false)
console.log(frog);
console.log(snake);
