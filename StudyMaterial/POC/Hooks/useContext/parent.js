import React, {createContext, useState} from 'react';
import {Button, Text, View} from 'react-native';
import ChildClass from './child';
import context from './context';


const ParentClass = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);

  const ans = {
    right: '✅',
    wrong: '❌'
}
  const show = () => {
    setCount(count + 1);
    setStatus(true)
    return 0;
  };

  return (
    <View>
      <Text>Hii</Text>
      <context.Provider value={{status:status,login:show}}>
        <ChildClass />
      </context.Provider>
    </View>
  );
};

export default ParentClass;
