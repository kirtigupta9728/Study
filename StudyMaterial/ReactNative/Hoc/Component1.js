import React from "react";
import { Text, TouchableOpacity, View } from 'react-native'
import HocExample from "./HocExample";

const Component1=(props)=>{
    
    console.warn('prp',props)
    return(
        <View style={{alignSelf:'center',alignContent:'center'}}>
           <TouchableOpacity onPress={props.onpress}>
            <Text>Hii Component1</Text>
            </TouchableOpacity>
        </View>
    )
}
let newCom=HocExample(Component1,1)
export default newCom;