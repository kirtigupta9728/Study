function getUsers() {
    return [
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ];
  }

  function findUser(username) {
    const users = getUsers();

    const user = users.find((user) => user.username === username);
    //console.log("user::",user)

    return user;
  }

  let promise= new Promise(function(resolve,reject){
    let x="abc";
    let y="abdc";

    if(x===y){
      resolve("okkk");
    }else{
      reject("nooo");
    }
  });

  promise.then(function(sucess){
    console.log("yes",sucess);
  }).catch(function(error){
    console.log("No",error)
  });
  
  //call promise inside the another promise

  let promise1= new Promise(function(resolve,reject){
    resolve("hii Kirti")

  });

  promise1.then(function(sucess){
     console.log("promise1",sucess);
    return new Promise(function(resolve,reject){
      resolve("okk next "+sucess)
     }).then(function(result){
      console.log("result",result)
     })
     
  })

  //with using setTimeOut

  let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello ");
    }, 1000);
  })
    .then((result) => {
      console.log(result);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(result + "GeeksforGeeks!");
        }, 2000);
      })
        .then((result) => {
          console.log(result);
        });
    });

    //Promis.all and Promise.allSettled

    let rejectPromise=new Promise((resolve,reject)=>{
          reject("reejct promise");
    });

    let promise_1=new Promise((resolve,reject)=>{
      resolve("resolve promise 1")
    });

    let promise_2=new Promise((resolve,reject)=>{
      resolve("resolve promise 2")
    });

    try{
      let promiseAll=Promise.all([rejectPromise,promise_1,promise_2]);
      promiseAll.then((result)=>console.log("promise All result",result));

  // let promiseSettled=Promise.allSettled([rejectPromise,promise_1,promise_2]);
  
  //     promiseSettled.then((result)=>console.log("promise all settled result",result));
    } catch(error) {
      console.log("error::::",error)

    }


    
   

  

