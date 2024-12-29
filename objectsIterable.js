const car = {
    speed: 100,
    color: "blue",
}
/**
for(prop of car) {
    console.log(prop)
}
Uncaught TypeError: car is not iterable
*/

console.log("The keys are: ", Object.keys(car))
console.log("The values are: ", Object.values(car))
console.log("Both: ", Object.entries(car))

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}