let top7 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City",
    "The Roman Forum",
    "The Pantheon",
    "Piazza Venezia",
    "The Palantine Hill"
];

const [] = top7;
const [first, second, third, ...secondVisit] = top7;
//Extracted into three variables, and then a subarray for the remaining items
console.log("The second visit will be: ", secondVisit)


`The rest operator, therefore,
gives us what is left over of the source array, as a separate sub array. `