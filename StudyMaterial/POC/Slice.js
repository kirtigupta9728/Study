const originalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Case 1: Extract the first 3 elements of the array
const case1 = originalArr.slice(0, 3);
console.log("Case 1: Extract the first 3 elements of the array: [" + case1 + "]"); //1,2,3

// Case 2: Extract the last 3 elements of the array
const case2 = originalArr.slice(-3);
console.log("Case 2: Extract the last 3 elements of the array: [" + case2 + "]");///8,9,10

// Case 3: Extract elements from the middle of the array
const case3 = originalArr.slice(3, 7);
console.log("Case 3: Extract elements from the middle of the array: [" + case3 + "]");//4, 5, 6, 7, 

// Case 4: Start index is greater than end index
const case4 = originalArr.slice(5, 2);
console.log("Case 4: Start index is greater than end index: [" + case4 + "]");//

// Case 5: Negative start index
const case5 = originalArr.slice(-4, 9);
console.log("Case 5: Negative start index: [" + case5 + "]"); //7,8,9

// Case 6: Negative end index
const case6 = originalArr.slice(3, -2);
console.log("Case 6: Negative end index: [" + case6 + "]");//[4,5,6,7,8]

// Case 7: Only start index is provided
const case7 = originalArr.slice(5);
console.log("Case 7: Only start index is provided: [" + case7 + "]");

// Case 8: Start index and end index are out of range
const case8 = originalArr.slice(15, 20);
console.log("Case 8: Start index and end index are out of range: [" + case8 + "]");

// Case 9: Start index and end index are negative and out of range
const case9 = originalArr.slice(-15, -10);
console.log("Case 9: Start index and end index are negative and out of range: [" + case9 + "]");
