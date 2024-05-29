import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import hocExample2 from './HocExample2';

const CounterIncrement1 = props => {
  console.warn('incremnet ', props.countNumber);
  return (
    <View>
      <Text>{props.countNumber}</Text>
      <TouchableOpacity onPress={props.onpress}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

const wrapValue = hocExample2(CounterIncrement1, 1);

export default wrapValue;
