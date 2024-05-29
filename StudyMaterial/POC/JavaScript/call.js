let addressObj = {
    state: 'Haryana',
    country: 'India',
    pincode: '123456',
    getAddress: function() {
      console.log(`${this.state}\n${this.country}\n${this.pincode}`);
    }
  }
  let addressObjTwo = {
    state: 'Texas',
    country: 'United Stated of America',
    pincode: '342567'
  }
  // Strange thing that we are using the property of one object
  // and using it to output the parameters of other object
  //addressObj.getAddress.call(addressObjTwo);

//  output 
//   Texas
// United Stated of America
// 342567

// borrowing method or function from other object and use it to other data object

// first Way
let name ={
  firstname:"kirti",
  lastName:'Gupta',
  printFullName:function(){
    console.log(this.firstname+" "+this.lastName);
  }
}

let name2={
  firstname:'Sachin',
  lastName:'gupta'
}

name.printFullName.call(name2);

// second way


let nameDeatils ={
  firstname:"kirti",
  lastName:'Gupta',
}

function printFullName(homeTown,state){
  console.log(this.firstname+" "+this.lastName +" "+homeTown+" "+state);
}

printFullName.call(nameDeatils,"Delhi","uttarPardesh");


//Apply
//diffrnace is that in call we passed argument indiviually but apply we passed argument in a list

printFullName.apply(nameDeatils,['pune','maharatha'])

//bind
// bind is same as call but in this it return a function that is invoked letter

let printdata=printFullName.bind(nameDeatils,"Itwa",'uttarPardesh')

//console.log("printDatra",printdata)
printdata();
