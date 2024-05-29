// . Array find() Method:
// This method is used to get the value of the first element in the 
// array that satisfies the provided condition. It checks all the 
// elements of the array and whichever the first element satisfies 
// the condition is going 
// to print


// Input array contain some elements.
let array = [10, 20, 30, 40, 50];

let value= array.find((value)=>{

    return value>10
})

console.log('value',value)