// 1. Array some() Method:
// This method checks whether at least one of the
//  elements of the array satisfies the condition 
// checked by the argument function.

let arr=[2,5,7,8,10]

let value=arr.some(condtion);
console.log('some value',value)

function condtion(elements,index,array){
  console.log(elements,index,array)
  return elements>8

}