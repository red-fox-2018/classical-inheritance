"use strict"

class Animal {

    constructor(leg,blood) {

        this._leg = leg
        this._isWarmBlod = blood
        this.superPower = new SuperPower()
    }

}

class SuperPower {

    highJump() {

        return this.obj + 'Lompatan bayangan'
    }
}

class Frog extends Animal {

    constructor(){

        super(4, true)
    }
}

class Bat extends Animal {

    constructor(){

        super(2, true)
    }
}

class Chimpanzee extends Animal {
    
    constructor(){

        super(2, true)
    }
}

class Fox extends Animal {
    
    constructor(){

        super(4, false)
    }
}

class Chicken extends Animal {
    
    constructor(){

        super(2, true)
    }
}

let chicken = new Chicken()

console.log(chicken)
console.log(chicken.superPower.highJump());