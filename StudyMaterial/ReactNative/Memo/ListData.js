import React from "react";

import { Text, TouchableOpacity, View } from 'react-native'
import { memo } from 'react';

const ListData=(props)=>{
    console.log('child component::::')
    return(
        <View>
            <Text style={{fontSize:18,color:'red',alignSelf:'center'}}>Child Dataa</Text>
            <Text>{props.data}</Text>
            <TouchableOpacity onPress={props.addData}>
                <Text>Child Btn</Text>
            </TouchableOpacity>
        </View>
    )

}

export default memo(ListData);