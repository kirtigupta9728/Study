//importing React and necessary hooks
import React, {useContext, useState, useEffect} from 'react';
//importing necessary native components
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';

//defining component
const SignIn = ({navigation}) => {
  const [count, setCount] = useState(0);
  const onPressedFP = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text style={{color: 'black'}}>{'count value ' + count}</Text>
      <TouchableOpacity testID="OnPressForgetBtn" onPress={onPressedFP}>
        <Text style={{width: 200, height: 200, backgroundColor: 'red'}}>
          Please click
        </Text>
      </TouchableOpacity>
    </View>
  );
};

//exporting the component
export default SignIn;
