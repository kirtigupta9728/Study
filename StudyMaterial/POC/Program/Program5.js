// Given an array arr of N elements,  A majority element in an
//  array arr of size N is an element that appears more than N/2 times 
//  in the array. The task is to write a function say isMajority()
//   that takes an array (arr[] ), array’s size (n) and a number to be searched (x)
//    as parameters and returns true if x is a majority element
//  (present more than n/2 times).


// Examples: 

// Input: arr[] = {1, 2, 3, 3, 3, 3, 10}, x = 3
// Output: True (x appears more than n/2 times in the given array)

// Input: arr[] = {1, 1, 2, 4, 4, 4, 6, 6}, x = 4
// Output: False (x doesn't appear more than n/2 times in the given array)

// Input: arr[] = {1, 1, 1, 2, 2}, x = 1
// Output: True (x appears more than n/2 times in the given array)

//let arr=[1, 2, 3, 3, 3, 3, 10]
let arr=[1,1,4,2,4,2,4, 6,]

//console.log('arr',arr)
let newArr=arr;
let count=0;
let value=''
let arrLength=arr.length;
function isMajorityElement(){
    for(let i=0;i<arrLength;i++){
       if(count==0){
        value=arr[i]
        count=1
       }else if(arr[i]==value){
        count++
       }else{
        count--
       } 
    }
    count=0
    for(let i=0;i<arrLength;i++){
        if(arr[i]==value){
            count++; // console.log('new count',arr[i],value)
        }
          console.log(arrLength/2)
    }
    console.log(arrLength/2,value,count)
    return count>=arrLength/2
  

}

isMajorityElement()

//console.log('isMajorityElement',isMajorityElement());

const [data,setdata]=useState([])

const scroll=()=>{
let newdata=[]
setdata([...data,newdata]);
setdata((pre)=>[...pre,newdata])
}