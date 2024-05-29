import react, {useEffect} from 'react';
import {Text, SafeAreaView, FlatList, View} from 'react-native';
import PureComponentExample from './POC/JavaScript/purecomponent';
import MemoCom from './POC/Memo/memoCom';
import UseCallbackExample from './POC/Memo/useCallBackCom';
import UseMemoExample from './POC/Memo/useMemoCom';
import MemoExample from './POC/Memo/memoCom';
import ShouldComponentupdateExample from './POC/Memo/shouldComponent';
import HooksMethod from './POC/Hooks/useEffect';
import ParentClass from './POC/Hooks/useContext/parent';
import UseReducerExample from './POC/Hooks/useReducer';
import SignIn from './Jest/SignIn';
import HocExample from './ReactNative/Hoc/HocExample';
import Component1 from './ReactNative/Hoc/Component1';
import   CounterIncrement1 from './ReactNative/Hoc/Component2'
import NewuseMemoExamples from './ReactNative/Memo/useMemo';
import NewuseCallBackExamples from './ReactNative/Memo/UsecallBack';
import CalCulationHoc from './ReactNative/Hoc/CalculationHoc'
import  Demo from './Demo'
const App = () => {
  const data = [
    {name: 'kirti', value: 1},
    {name: 'xyz', value: 2},
    {name: 'abc', value: 3},
  ];
  // useEffect(() => {
   
  //   getApi();
  // }, []);
  ///Demo.show();
  Demo.customView();
  // const getApi = () => {
  //   let value = fetch('https://dummyjson.com/products/1').then(res =>
  //     res.json().then(res => console.log('res', res)),
  //   );
  // };
  const renderItem = item => {
    console.log('kkkk', item);
    return (
      <View>
        <Text>{'kkk'}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      {/* <Text>hiii</Text>
      <Text>hiii</Text>
      <Text>hiii</Text>
      <Text>hiii</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
      /> */}
       <Text >okkk</Text>
       {/* <PureComponentExample state={3}/>       */}
       {/* <UseMemoExample/> */}
       {/* <UseCallbackExample/> */}
       {/* <MemoExample/> */}
       {/* <ShouldComponentupdateExample/> */}
       {/* <HooksMethod/> */}
       {/* <ParentClass/> */}
       {/* <UseReducerExample/> */}
       {/* <SignIn/> */}
       {/* <Component1/> */}
      {/* // CounterIncrement1 */}
      {/* <CounterIncrement1/> */}
      {/* <NewuseMemoExamples/> */}
      {/* <NewuseCallBackExamples/> */}
      <CalCulationHoc/>
    </SafeAreaView>
  );
};

export default App;
