// Task 1
var diary = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (const product of diary) {
        console.log(product)
    }
}
logDairy();
// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const ability of Object.keys(bird)) {
        console.log(`${ability}: ${bird[ability]}`);
    }
}
birdCan();
// Task 3
function animalCan() {
    for (const ability in bird) {
        console.log(`${ability}: ${bird[ability]}`);
    }
}
animalCan();
