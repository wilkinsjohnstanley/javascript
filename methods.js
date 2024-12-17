var car = {};

car.color = "red";
car.mileage = 120000;
car.lightsOn = function(){
    console.log("The lights are on.")
}

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('The engine is running.'); 
}
car.turnKey();
car.lightsOn();