// Array every() Method:
// This method checks whether all the elements
//  of the array satisfy the given condition or 
//  not that is provided by a
//  function passed to it as the argument.

let arr = [11, 89, 23, 7, 98];

let value=arr.every(condition1);
console.log("every ",value);

function condition1(elements,index,arr){
     return elements>0
}