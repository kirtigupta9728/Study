function flattenArray(arr) {
    let result =[]
   for(let i=0;i<arr.length;i++){
       if(Array.isArray(arr[i])){
           let innerArray=flattenArray(arr[i]);
           result.push(...innerArray)
       }else{
            result.push(arr[i])
       }
      
   }

  return result;
}

const originalArray = [1,[8,6], 2, 3, [[4, 8,[5]]], [6]];
const flattenedArray = flattenArray(originalArray);
console.log(flattenedArray);


//[ 1, 2, 3, 4, 5, 6 ]