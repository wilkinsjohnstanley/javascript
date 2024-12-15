//Arrays are iterable
var veggies = ['onion', 'parsley', 'carrot'];
console.log("The length is: ",veggies.length);
// console.log(veggies[0]);
// console.log(veggies[1]);
for(var i = 0 ; i < veggies.length ; i ++){
    console.log(`Veggie #${i+1} : `,veggies[i])
}