// Array flatMap() Method:
// This method is used to flatten the input array 
// element into a new array. This method first of all 
// map every element with the help of a mapping function,
//  then flattens the input array element into a new array.


const arr = [
    [1], [2], [3], [4], [5]
];

let newarr=arr.flatMap((arr)=>arr*10)
//newarr [ 10, 20, 30, 40, 50 ]
console.log('newarr',newarr)