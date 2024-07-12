"use strict";
class Car {
    //constructor
    constructor(engineName) {
        this.engine = engineName;
    }
    //function
    display() {
        console.log('engine from display function:', this.engine);
    }
}
const objCar = new Car("engine1");
objCar.display();
