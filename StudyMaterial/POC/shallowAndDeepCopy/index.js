
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log("Employee=> ", employee);

let newEmp=employee; // this shallow copy

console.log("new Emp",newEmp)

newEmp.ename="kirti"

console.log('after modification newEmp',employee);

console.log('after modification emp',newEmp)
console.log("::::::::::::::::::::::::::::::::::::::::")

// deep copy bu=y using of spread operator and object.assign, na dusing Json.parse and json stringify
// to avoid the shallow copy we use spread operator

let newdata={...employee};

console.log("cody data using spread oprator",newdata);

newdata.ename="Sachin"

console.log("after modification:::::::::::::::::")
console.log("old emp",employee);
console.log("new data",newdata);


// to avoid the shallow by using object.assign()

let objectAssign=Object.assign({},employee);

console.log("after using objectAssign ",objectAssign);

objectAssign.ename="Sarita Gupta";

console.log("after modification :::::::::::::::");

console.log("objectAssign",objectAssign);
console.log("emp",employee);



// by using deep copy with JSON.parse and JSon.stringfy

let newDatabyDeepCopy=JSON.parse(JSON.stringify(employee));

console.log("newDatabyDeepCopy",newDatabyDeepCopy)

newDatabyDeepCopy.ename="xyz"

console.log("after modification:::::::");

console.log("newDatabyDeepCopy after modification",newDatabyDeepCopy)

console.log("old data",employee)

