const car = {
    engine:true,
    steering:true,
    speed:"slow"
}
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);
console.log("------for-in is unreliable-----");
for(prop in sportsCar){
    console.log(prop)
}
console.log('🥳', "Iterating ober objectst and their prototypes!")
console.log('-------for-of loop IS reliable-----')
for(prop of Object.keys(sportsCar)){
    console.log(prop+": " + sportsCar[prop]);
}
console.log("🥳", "Iterating on just the properties.")