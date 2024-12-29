/*
map returns a new array: The original array myArray remains unchanged.
Save new one in its own array
*/
const myArray = [0, 10, 20, 30, 40, 50];
const newArray = myArray.map(num => num / 10);

console.log(myArray);  // [0, 10, 20, 30, 40, 50]
console.log(newArray); // [0, 1, 2, 3, 4, 5]

