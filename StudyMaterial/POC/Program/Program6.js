// Write a program to print all the LEADERS in the array. An element is a
//leader if it is greater than all the elements to its right side. And
//the rightmost element is always a leader.

// For example:

// Input: arr[] = {16, 17, 4, 3, 5, 2},
// Output: 17, 5, 2

// Input: arr[] = {1, 2, 3, 4, 5, 2},
// Output: 5, 2

let arr = [16, 17, 4, 3, 5, 2];

let maxvalue=arr[arr.length-1]
console.log('data',arr[arr.length - 2])
for (let i = arr.length - 2; i >= 0; i--) {
   console.log(i)
  if (maxvalue < arr[i]) {
   maxvalue=arr[i]
    console.log('maxvalue',maxvalue);
  }
}
