import { useState } from "react";
import "./styles.css";
let arr=[]
export default function App() {
  const [data,setData]=useState([])
  const [input,setInput]=useState()
  const submit=()=>{
   arr.push(input);
   console.log("arr",arr)
   setData((preData)=>{
    let newArr=[...preData,input];
    return newArr;
   })
   setInput((prevData) => [""]);
  }
  const editItem=(item)=>{
   console.log("item::",item);
  }

  const deleteItem=(item)=>{
    let arr=[...data,]
     console.log("arr:", arr);
    let index=arr.indexOf(item)
    if(index!=-1){
      arr.splice(index,1)
    }
    setData(arr)
   console.log("arr:", arr);
  }
  return (
    <div className="App">
     <input value={input} onChange={(e)=>setInput(e.target.value)}/>
     <> </>
     <button onClick={submit}> submit</button>
     {data.map((item)=>{
      return(
      <div style={{ display: 'flex', alignItems: 'center',marginTop:10,backgroundColor:'green'}}>
        <div style={{width:200}}> {"data "+item}</div>
        <button onClick={()=>editItem(item)} style={{ marginLeft: '10px' }}>edit</button>
        <button onClick={()=>deleteItem(item)} style={{ marginLeft: '10px' }}>delete</button>
       </div>
      )
      
     })}
    
    </div>
  );
}
