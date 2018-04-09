class Animal {
    constructor(num_legs,num_hands){
        this.animal = 'noName'
        this.num_legs = 2
        this.num_hands = 2
    }
    display(){
        return `${this.animal} have ${this.num_legs} legs, and have ${this.num_hands} hands`
    }
}

class Frog extends Animal{
    constructor(num_legs,num_hands){
        super()
        this.animal = 'frog'
    }
}
class Bat extends Animal{
    constructor(num_legs,num_hands){
        super()
        this.animal = 'bat'
        this.num_legs = num_legs
        this.num_hands = num_hands
    }
}
class Chimpanze extends Animal{
    constructor(num_legs,num_hands){
        super()
        this.animal = 'chimpanze'
    }
}
class Fox extends Animal{
    constructor(num_legs,num_hands){
        super()
        this.animal = 'fox'
        this.num_legs = num_legs
        this.num_hands = num_hands
    }
}
class Chicken extends Animal{
    constructor(num_legs,num_hands){
        super()
        this.animal = 'chicken'
        this.num_legs = num_legs
        this.num_hands = num_hands
    }
}

let frog = new Frog()
let bat = new Bat(2, 'not')
let chimpanze = new Chimpanze()
let fox = new Fox(4, 'not')
let chicken = new Chicken(2, 'not')

console.log(frog.display())
console.log(bat.display())
console.log(chimpanze.display())
console.log(fox.display())
console.log(chicken.display())