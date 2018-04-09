"use strict"

class Animal {
    constructor(num, boolean) {
        this.num_legs = num;
        this.is_warm_blooded = boolean;
        this.superpower = new SuperPower();
    }
}

class Frog extends Animal {
    constructor() {
        super(4, false)
    }
}

class Bat extends Animal {
    constructor() {
        super(2, true)
    }
}

class Fox extends Animal {
    constructor() {
        super(4, true)
    }
}

class SuperPower {
    user_laser_vision() {
        console.log('pew pew pew')
    }

    be_invisible() {
        console.log(`you can't see me now :D`)
    }
}

let frog = new Frog();
let bat = new Bat();
let fox = new Fox();

console.log(frog);
console.log(bat);
console.log(fox);
frog.superpower.user_laser_vision();
fox.superpower.be_invisible();