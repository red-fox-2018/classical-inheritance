"use strict"

class Animals{
    constructor(legs,blood){
        this.num_legs = legs;
        this.is_warm_blooded = blood
    }
}

class Frog extends Animals{
    constructor(){
        super(4,'cold')
    }
}

class Bat extends Animals{
    constructor(){
        super()
        this.num_legs = 2;
        this.is_warm_blooded = 'cold blood'
    }
}

class Chimpanzee extends Animals{
    constructor(){
        super()
        this.num_legs = 2;
        this.is_warm_blooded = 'warm blood'
    }
}

class Fox extends Animals{
    constructor(){
        super(4,'cold')
    }
}

class Chicken extends Animals{
    constructor(){
        super()
        this.num_legs = 2;
        this.is_warm_blooded = 'warm blood'
    }
}


let animal = new Fox();
console.log(animal);