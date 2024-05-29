// Given a mobile number and some conditions for a fancy number, 
//find if the given number is fancy. A 10-digit mobile number is called
// fancy if it satisfies any of the following three conditions. 

const jestConfig = require("../../jest.config");

// A single number occurs three consecutive times. Like 777.
// Three consecutive digits are either in increasing or decreasing fashion.
// Like 456 or 987.
// A single digit occurs four or more times in the number. Like 9859009976 – 
//here the digit 9 occurs 4 times.

let no='9859009976'


if(no.length!=10){
    return false;
}

//constion 1

// A single number occurs three consecutive times. Like 777.

function cond1(){
    for(let i=0;i<=7;i++){
        if(no[i] == no[i+1] && no[i+1] == no[1+2]){
            return true;
        }else{
            return false;
        }
    }
}

cond1();
console.log("cond1::",cond1())

//constion 2

// Three consecutive digits are either in increasing or decreasing fashion.
// Like 456 or 987.

function cond2(){
    for(let i=0;i<=7;i++){
        if(no[i] > no[i+1] && no[i+1] >no[1+2] || no[i] < no[i+1] && no[i+1] < no[1+2]){
            return true;
        }else{
            return false;
        }
    }
}

cond2();
console.log("cond2::",cond2())

//constion 3

// A single digit occurs four or more times in the number. Like 9859009976 – 
//here the digit 9 occurs 4 times..

function cond3(){
    let a= new Array(10).fill(0);
    for(let i=0;i<=10;i++){
       a[i]=no.split(i.toString()).length-1
       console.log('a,',a[i])
    if (a[i] >= 4) {
        console.log("true",true)
        return true; // Condition 3: A digit occurs four or more times
    }}
}

cond3();
console.log("cond2::",cond3())

if(cond1 || cond2 || cond3){
  console.log("number is fancy number")
}else{
    console.log("number is not fancy number")
}