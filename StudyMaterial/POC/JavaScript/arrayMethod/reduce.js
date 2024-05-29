// 2. Array reduce() Method:
// The array reduce() method in JavaScript is 
// used to reduce the array to a single value and executes 
// a provided function for each value of the array 
// (from left to right) and the return value 
// of the function is stored in an accumulator.

let numbers = [88, 50, 25, 10];

let value=numbers.reduce(reduceValue);
console.log('value',value)
function reduceValue(total,currentValue){
console.log(total,currentValue)
 return total-currentValue
}