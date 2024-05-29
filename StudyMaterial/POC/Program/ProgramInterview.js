let str = 'aacbbddd';
let value=[]
for(let i=0 ;i<str.length-1;i++){
    if(str[i]==str[i+1]){
        value.push(str[i])
        if(i+1==str.length-1){
             value.push(str[i+1])
        }
    }else{
     let value2=value.pop()
     if(str[i]!=str[i+1]){
         value=[]
     }
    }
    console.log('data',value)
}