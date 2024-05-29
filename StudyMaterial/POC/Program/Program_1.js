// var i=1;
// while(i<100){
//     console.log(i);
//     console.log(i+2);
//     i=i+3
// }

//:::::::Reverse the Word

let str="My Name is Kirti";

let newStr=str.split(" ");

console.log('newStr',newStr)

let reverseValue=newStr.map((word)=>console.log(word.split("").reverse().join("")));

console.log('reverseValue',reverseValue.join(" "))

// Javascript code for the above approach

let text= "i like this program very much";
let str2 = text.split(" ");
str2.reverse();
str2 = str2.join(" ");
console.log(str2);

// This code is contributed by garg28harsh.
