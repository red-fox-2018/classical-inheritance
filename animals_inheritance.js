"use strict"

class Animals {
    constructor(num_legs,is_warm_blooded){
        this.num_legs = num_legs
        this.is_warm_blooded = is_warm_blooded
    }
}

class Frog extends Animals{
    constructor(num_legs, is_warm_blooded){
        super(num_legs,is_warm_blooded)
    }
}

class Bat extends Animals{
    constructor(num_legs,is_warm_blooded){
        super()
        this.num_legs = 2
        this.is_warm_blooded = "tidak berdarah panas"
    }
}

class Chimpanzee extends Animals{
    constructor(num_legs,is_warm_blooded){
        super(num_legs,is_warm_blooded)
    }
}

class Fox extends Animals{
    constructor(num_legs,is_warm_blooded){
        super(num_legs,is_warm_blooded)
    }
}

class Chiken extends Animals{
    constructor(num_legs,is_warm_blooded){
        super(num_legs,is_warm_blooded)
    }
}

let frog = new Frog(4, "tidak berdarah panas")
console.log(`Frog ${frog.num_legs} ${frog.is_warm_blooded}`)

let bat = new Bat()
console.log(`Bat ${bat.num_legs} ${bat.is_warm_blooded}`)

let chimpanzee = new Chimpanzee(4, "berdarah panas")
console.log(`Chimpanzee ${chimpanzee.num_legs} ${chimpanzee.is_warm_blooded}`)

let fox = new Fox(4, "iya warm blood")
console.log(`Fox ${fox.num_legs} ${fox.is_warm_blooded}`)

let chiken =  new Chiken(2, "tidak warm blood")
console.log(`Chiken ${chiken.num_legs} ${chiken.is_warm_blooded}`)