"use strict"
class Animal {
  constructor(num_legs,blood) {
    this.num_legs=num_legs
    this.blood= blood
    this.SuperPower= new SuperPower
  }
}

class mamals extends Animal {
  constructor(num_legs,blood){
    super(num_legs,blood)
  }


}

class Reptile extends Animal {
  constructor(num_legs,blood){
    super(num_legs,blood)
    this.life = 'Amphibie'
  }



}

class Aves extends Animal {
  constructor(num_legs,blood){
    super(num_legs,blood)
    this.life = 'Amphibie'
  }

  suara(){
    return 'auuuuuuu'
  }

}


class SuperPower {

    use_laser_vision() {
        console.log('ciiiing***')
    }
    be_invisible() {
        console.log('hilang')
    }

}


let bat = new mamals(2,'is_warm_blooded')
let frog = new Reptile(4,'is_cold_blooded')
let ular = new Reptile('no legs','is_cold_blooded')
let dinosaur = new Reptile(8,'is_cold_blooded')
let burungonta = new Aves(2,'is_warm_blooded')
dinosaur.SuperPower.use_laser_vision()
console.log(burungonta.suara());
console.log(bat,frog,ular);
