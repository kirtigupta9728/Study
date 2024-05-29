import React, {useMemo, useState} from 'react';
import {Button} from 'react-native';

const NewuseMemoExamples = () => {
  const [count_1, setCount_1] = useState(0);
  const [count_2, setCount_2] = useState(0);

  const value = useMemo(showData, [count_2]);
  return (
    <>
      <Button title="Button One" onPress={() => setCount_1(count_1 + 1)} />
      <Button title="Button Two" onPress={() => setCount_2(count_2 + 1)} />
    </>
  );
};
const showData = () => {
  console.log('Hii Kirti  i am use Memo');
};
export default NewuseMemoExamples;
