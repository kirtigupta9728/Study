// Given three Sorted arrays in non-decreasing order, print all common 
// elements in these arrays.

// Examples: 

// Input: 
// ar1[] = {1, 5, 10, 20, 40, 80} 
// ar2[] = {6, 7, 20, 80, 100} 
// ar3[] = {3, 4, 15, 20, 30, 70, 80, 120} 
// Output: 20, 80

// Input: 
// ar1[] = {1, 5, 5} 
// ar2[] = {3, 4, 5, 5, 10} 
// ar3[] = {5, 5, 10, 20} 
// Output: 5, 5

let arr1 = [1, 5, 10, 20, 40, 80] 
let arr2= [6, 7, 20, 80, 100]
let arr3 = [3, 4, 15, 20, 30, 70, 80, 120] 

let i=0;
let j=0;
let k=0;
while(i < arr1.length && j<arr2.length && k<arr3.length){
    if(arr1[i]==arr2[j] && arr2[j]==arr3[k]){
        console.log('value',arr1[i],arr2[j],arr3[k])
        i++;
        j++;
        k++
    }else if(arr1[i]<arr2[j]){
        i++;
    }else if(arr2[j]<arr3[k]){
        j++;
    }else{
        k++
    }
}