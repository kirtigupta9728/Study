// JavaScript Array.splice() Method
// This method is used for the Insertion and Removal of elements in between an Array 

//Array.splice (start, deleteCount, item 1, item 2….) 


// Removing an adding element at a particular location
// in an array
// Declaring and initializing arrays
let number_arr = [20, 30, 40, 50, 60];
let string_arr = ["amit", "sumit", "anil", "prateek"];
 
// splice()
// deletes 3 elements starting from 1
// number array contains [20, 60]
number_arr.splice(1, 3); //number_arr [ 20, 60 ]
 
// doesn't delete but inserts 3, 4, 5
// at starting location 1
number_arr.splice(1, 0, 3, 4, 5)

console.log("number_arr",number_arr)


// //number_arr [
//     20,  3,  4,  5,
//     30, 40, 50, 60
//   ]