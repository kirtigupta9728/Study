import React, {useContext, useState} from 'react';
import {Button, Text, View} from 'react-native';
import context from './context';

const ChildClass = () => {
  const [count, setCount] = useState(0);

  const getContext=useContext(context);

  console.log("getContext",getContext.status,getContext.login)

  const show = () => {
    setCount(count + 1);
  };
  return (
    <View>
      <Text>Hii</Text>
      <Button title="click me " onPress={show} />
    </View>
  );
};

export default ChildClass;
