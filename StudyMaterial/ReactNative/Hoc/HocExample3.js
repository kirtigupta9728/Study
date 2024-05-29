import React from 'react';
import {Alert} from 'react-native';

const HocExample3 = WrappedComponent => {
  return (hocCom = () => {
    const calculation = props => {
      // for(let i=0;i<10;i++){
      //     console.log("count value",i)

      // }
      Alert.alert('hii');
    };
    return <WrappedComponent onpress={calculation} />;
  });
};

export default HocExample3;
