class Car {
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }
    turboOn(){
        console.log("brrrrrrrrrrrrrrr!beeeeerrrrrrrrr!brrrrrr!")
    }
    brake(){
        console.log("sckrrrrrrrrrr")
    }
}
let car1 = new Car()
car1.turboOn();
car1.brake();