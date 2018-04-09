"use strict"
class Animal {
	constructor(num_legs,is_warm_bloded) {
		this.num_legs=num_legs;
		this.is_warm_bloded=is_warm_bloded;
	}
}


class Frog extends Animal  {
	constructor() {
		super(2,false);
		this.num_legs=4;
		this.is_warm_bloded=true;
	}
}

class Cat extends Animal {
	constructor() {
		super(3,false);
		this.is_warm_bloded=true;
		
	}
}

class Horse extends Animal {
	constructor() {
		super(5,false);
		this.num_legs=4;
		
	}
}


var frog=new Frog();
var cat= new Cat();
var horse=new Horse();
console.log(frog);
console.log(cat);
console.log(horse);