import React, { useState } from "react";
import { Alert } from 'react-native';

const hocExample2=(WrappedComponent,data)=>{

    return Hoc2=(props)=>{
        const [count,setCount]=useState(0)
        const incrementCount=()=>{
            setCount(count+1)
            Alert.alert('Hii Hoc Component Call')
        }
        return(
            <WrappedComponent
             onpress={incrementCount}
             countNumber={count}
             {...props} 
            />
        )
    }
}

export default hocExample2