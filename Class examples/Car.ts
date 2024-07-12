class Car {
    //fields: var
    private engine: string; //public

    //constructor
    constructor(engineName: string) {
        this.engine = engineName;
    }
    //function

    display(): void {
        console.log('engine from display function:', this.engine);
    }
}


const objCar = new Car("engine1");
objCar.display();