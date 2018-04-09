class Animal {
    constructor(num_legs){
        this.animal = 'noName'
        this.num_legs = 2
    }
    display(){
        return `${this.animal} have ${this.num_legs} legs`
    }
}

class Frog extends Animal{
    constructor(num_legs){
        super()
        this.animal = 'frog'
    }
}
class Bat extends Animal{
    constructor(num_legs){
        super()
        this.animal = 'bat'
    }
}
class Chimpanze extends Animal{
    constructor(num_legs){
        super()
        this.animal = 'chimpanze'
    }
}
class Fox extends Animal{
    constructor(num_legs){
        super()
        this.animal = 'fox'
        this.num_legs = num_legs
    }
}
class Chicken extends Animal{
    constructor(num_legs){
        super()
        this.animal = 'chicken'
    }
}

let frog = new Frog()
let bat = new Bat()
let chimpanze = new Chimpanze()
let fox = new Fox(4)
let chicken = new Chicken()

console.log(frog.display())
console.log(bat.display())
console.log(chimpanze.display())
console.log(fox.display())
console.log(chicken.display())