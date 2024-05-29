import React, {Component, memo, useCallback, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ChildComponent from './childComponent';

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [input, setInput] = useState('');


  // const data = useCallback(() => {
  //   console.log('data:::::');
  //   setCount(count + 1);
  // }, [count]);

  const data = () => {
    console.log('data:222::::');
    setCount(count + 1);
  };
  return (
    <>
      <SafeAreaView style={{alignItems:'center'}}>
        <TouchableOpacity
          style={{
            width: 200,
            height: 100,
            margin: 40,
            borderWidth: 1,
            borderColor: 'red',
          }}
          onPress={data}>
          <Text>okkk</Text>
        </TouchableOpacity>

        <TextInput
          value={input}
          style={{width: 100, height: 40, borderWidth: 2}}
          onChangeText={e => setInput(e)}
        />

        <ChildComponent data={data} name="Child  component" />
      </SafeAreaView>
    </>
  );
};

export default MemoExample;
