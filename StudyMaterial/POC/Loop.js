// for in and for of

let data={
    name:"kirti",
    id:'1'

}

for(let i in data){
    console.log('for in',i) // name, id
}

// for(let i of data){
//     console.log('for of',i) // error
// }

let data1=[10,11,12,13,14,15]

for(let i in data1){
    console.log('for in with array',i) //0,1,2,3,4,,5,6 itb will print there ky or property name
}

for (let i of data1){
    console.log('for of with array',i) // 10 ,11,12,13,14,15
}

function print() {
    console.log(arguments)
  }
  print("hello", 400, false)