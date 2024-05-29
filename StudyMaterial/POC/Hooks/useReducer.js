import React, {createContext, useEffect, useLayoutEffect, useReducer, useRef, useState} from 'react';
import {Button, Text, View} from 'react-native';

const initialState=0
const reducer=(state,action)=>{
    switch(action){
        case 'add':
        return state+1;
        case 'minus':
            return state-1
         default:
         throw new Error("error comes")   ;
    }

}


const UseReducerExample = () => {
  const [updateState,dispatch]=useReducer(reducer,initialState);
  const useRefValue=useRef(null);


  useEffect(()=>{
    console.log("hii this is useffect")
  },[])

  useLayoutEffect(()=>{
    console.log("hii this uselayout ")
  },[])
  
  const showValue=()=>{
    let value=10
    useRefValue.current=value
    console.log("ref example", useRefValue.current)
  }
  return (
    <View>

      <Text>{"Hiijjjjjjj "+ updateState}</Text>
      <Button title='add' onPress={()=>dispatch('add')}/>
      <Button title='minus' onPress={()=>dispatch('minus')}/>
      <Button title='useRef Example' onPress={()=>showValue()}/>
    </View>
  );
};

export default UseReducerExample;
