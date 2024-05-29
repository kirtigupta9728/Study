// 11. Array forEach() Method:
// This method calls the provided function once for each 
// element of the array. The provided function may perform any 
// kind of operation on the elements of the 
// given array.



// Original array
const items = [1, 29, 47];
const copy = [];
 
items.forEach(function (item) {
    copy.push(item * item);
});
 
console.log(copy);