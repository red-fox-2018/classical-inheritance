class Animal{
    constructor(legs,type){
        this.legs=legs
        this.type=type
    }
}

class Frog extends Animal{
    constructor(legs,type){
      super(legs)
    }
}

class Bat extends Animal{
    constructor(legs,type){
        super(legs,type)
    }
}

class Chimpanzee extends Animal {
    constructor(legs,type){
        super(legs,type)
    }
}

class Fox extends Animal {
    constructor (legs,type){
        super(legs,type)
    }
}

class Chicken extends Animal{
    constructor (legs,type){
        super(legs,type)
    }
}

let frog = new Frog(4,"Omnivore")
let bat = new Bat(2,"Omnivore")
let monkey = new Chimpanzee(2,"Herbivore")
let fox = new Fox(4,"Carnivore")
let chicken = new Chicken(2,"Herbivore")
console.log(frog)
console.log(bat)
console.log(monkey)
console.log(fox)
console.log(chicken)
