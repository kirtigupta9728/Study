// Generator-Function: A generator-function is defined like a 
// normal function, but whenever it needs to generate a value, 
// it does so with the yield keyword 
// rather than return


// Generator functions return a generator object. 
// Generator objects are used either by calling the next 
// method on the generator object or using the generator object 
// in a “for of” loop (as shown in the above program) 


function* data(){
   let no=1
   while(true){
   yield no++
   }

}
let gen=data();
for(let i=1;i<10;i++){
    console.log("genrator function",gen.next().value)
}

// call by value
let originalvalue=10;

const showData=(originalvalue)=>{
    originalvalue=originalvalue+10;
    console.log('updated value',originalvalue)

};
showData(originalvalue);
console.log("originalvalue",originalvalue);

// call by refrence

let obj={
    name:'kirti'
}

const callByRefrance=(value)=>{
    obj.name="sachin";
     console.log("update value of call by Refrance",value);
}

callByRefrance(obj);

console.log("original data of call by refrance",obj);

function* fun1() {
    yield 10;
    yield 20;
    yield 30;
}
  
// Calling the Generate Function
let gen2= fun();
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);



//Advantages of generators: They are memory efficient as 
// lazy evaluation takes place, i.e, delays the evaluation 
// of an expression until its value is needed.JavaScript
//  use-case (generators)

// Writing generators in redux-saga
// JavaScript async-await (Implemented with promise and generators)