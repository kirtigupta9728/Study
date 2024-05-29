// Array filter() Method:
// This method is used to create a new array from a given array
//  consisting of only those elements from the given array which 
//  satisfy a condition set by the 
// argument function.

let filtered = [112, 52, 0, -1, 944]

let newarr=filtered.filter((value)=>{
    return value>0
})

console.log('new arr',newarr)