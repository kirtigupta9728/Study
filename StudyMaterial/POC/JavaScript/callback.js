//call back

const add=(a,b,callback)=>{
    console.log("Hii this is call back",a+b);
    callback();
}
function show(){
    console.log("this is after fist function call")
}
add(5,6,show);

