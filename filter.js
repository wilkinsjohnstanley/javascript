const nums = [0, 10, 20, 30, 40, 50];
const filteredNums = nums.filter(num => num > 20);
console.log(filteredNums); // [30, 40, 50]
/* The filter method does not modify the original array
If you want to log the filtered array, 
you need to assign the result of filter to a new variable or 
log it directly
*/