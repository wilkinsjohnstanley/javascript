var bird = {
    hasWings:true,
    canFly:true,
    hasFeathers:true
}
var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1)
console.log("eagle1 has wings: ", eagle1.hasWings)