// Array findindex() Method:
// This method returns the index of the first element in a 
// given array that satisfies the provided testing function. 
// Otherwise, -1 
// is returned.

let array = [10, 20, 30, 110, 60];

let index=array.findIndex((value)=>{

    return value>20
})

console.log('index',index)