"use strict"
class Animal {
  constructor(leg, blood){
        this.leg = leg
        this.is_warm_blood = blood
        this.superpower = new SuperPower
  }
}

class SuperPower{
    use_laser_vision(){
        return 'ciuw ciuw ciuw'
    }

    be_invicible(){
        return 'menghilaaaang'
    }

    mele_exposive(){
        return 'boooom'
    }
    kagebunshin(){
        return 'duplikaaaaat'
    }
}

class Frog extends Animal{
      constructor(){
        super(4,true)
      }
}

class Bat extends Animal {
  constructor(){
    super(4,false)
  }
}

class Chimpanzee extends Animal{
  constructor(){
    super(4,true)
  }
}

class Fox extends Animal{
  constructor(){
    super(4,false)
  }
}

class Chicken extends Animal{
  constructor(){
    super(2,true)
  }
}

let chicken = new Chicken
let fox = new Fox
let chimpanzee = new Chimpanzee
let bat = new Bat
let frog = new Frog
console.log(chicken.superpower.be_invicible())
console.log(bat)
console.log(bat.superpower.mele_exposive())
console.log(frog)
console.log(frog.superpower.kagebunshin())
