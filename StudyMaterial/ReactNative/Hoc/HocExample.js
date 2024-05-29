import React from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';

const HocExample = WrapperComponent => {
  return  HocCom =(props)=>{

    const showAlert=()=>{
      Alert.alert('Hii I am Hoc com')
    }
    return (
      <WrapperComponent
        onpress={showAlert}
        {...props}
      />
    );
  };
};
export default HocExample;
