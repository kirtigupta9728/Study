import React, {useCallback, useMemo, useState} from 'react';
import {Button, TextInput,Text} from 'react-native';
import ListData from './ListData';

const NewuseCallBackExamples = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const onIncremnet = () => {
    setCount(count + 1);
  };

  const addData = useCallback(() => {
    setData(prev => [...prev, ' new data']);
  }, [data]);
  let countter
  

  const value=useMemo(()=>{
    console.log("okk")
    for(let i=0;i<500;i++){
      countter=i
    }
    return countter;
  },[countter])
//console.log('countter',countter)
    // const addData = () => {
    //   setData((prev)=>[...prev,' new data'])
    // };

  // console.log('add data',addData)

  return (
    <>
    {console.log('value + count',value ,count)}
      <TextInput
        style={{width: 100, height: 30, borderWidth: 2, alignSelf: 'center'}}
        value={input}
        onChangeText={(e)=>setInput(e)}
      />
      <Text>{value +" "+ count}</Text>
      <Button title="Button Two" onPress={() => onIncremnet()} />

      <ListData  count={count} addData={addData} />
    </>
  );
};
export default NewuseCallBackExamples;
