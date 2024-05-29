//1. Default parameter
//default function parameters allow you to initialize named parameters 
//with default values if no values or undefined are passed into the function.

const show=(msg)=>{

console.log("default parameter",msg); // undefined
}

show();
const showValue=(msg="default parameter pass")=>{
    console.log("default parameter 2",msg); // undefined
}
showValue();

// 2. Rest Parameter

//new kind of parameter so-called rest parameter that has a prefix of three dots (...).

// Without rest parameter
function fun(a, b){
    return a + b;
}
console.log(fun(1, 2)); // 3
console.log(fun(1, 2, 3, 4, 5)); // 3 

// Without rest parameter
function fun2(...rest){
    let sum=0
    for(let i=1;i<=rest.length;i++){
        sum=sum+i
    }
    console.log("value i",sum)
    return sum;
}
console.log(fun2(1, 2)); // 3
console.log(fun2(1,2,3,4,5)); // 15 


//3 . Spread Operator

// normal array concat() method
let arr = [1, 2, 3];
let arr2 = [4, 5];
 
arr = arr.concat(arr2);
 
console.log("without using spread",arr); // [ 1, 2, 3, 4, 5 ]

// normal array concat() method
let arr_spread = [1, 2, 3];
let arr2_spread = [4, 5];
 
let arr_spreadValue = [...arr_spread,...arr2_spread]
 
console.log("with using spread",arr_spreadValue); // [ 1, 2, 3, 4, 5 ]

// copying without the spread operator
let arr_copy = ['a', 'b', 'c'];
let arr2_copy = arr_copy;
 
console.log(arr_copy); // [ 'a', 'b', 'c' ]


let arr_copy_spread = ['a', 'b', 'c'];
let arr2_copy_spread = [...arr_copy_spread];
 
console.log(arr2_copy_spread); // [ 'a', 'b', 'c' ]

// 4. Object Literal Enhancement

//

// variable declaration
var name = "Duke";
var color = "Brown";
var age = 5;
  
// Using Object Literal Enhancement
// Combines all variables into a dog object
var dog = {name, color, age};
console.log(dog);

//Template Literals

//Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

let anotherStr = `Here's a template literal`;

console.log("anotherStr",anotherStr)

// 5. Destructuring

var marks = {x: 21, y: -34, z: 47 };
 
const { x, y, z } = marks; // x = 21, y = -34, z = 47

console.log(x);
console.log(y);
console.log(z);

// 6. Map

//7. Set

// A set is a collection of items that are unique

// ["sumit","amit","anil","anish"]
let set1 = new Set(["sumit","sumit","amit","anil","anish"]);

console.log("set1", set1)
  
// it contains 'f', 'o', 'd'
let set2 = new Set("fooooooood");

console.log("set2", set2)


// 8. Array Method

//Array find() – find an element in an array
let value=[2,20,10,-10,5,7]
let findValue=value.find((i)=>{
    return i>0;
}
  )
  console.log('findValue',findValue)

  // input array contain some elements.
let array = [-10, -0.20, 0.30, -40, -50];

// function (return element > 0).
let found = array.findIndex(function (element) {
	return element > 0;
});

// Printing desired values.
console.log(found);



