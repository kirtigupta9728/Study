import React from "react";
import { Text, TouchableOpacity, View } from 'react-native'
import HocExample3 from "./HocExample3";

const CalCulationHoc=(props)=>{
    return(
        <View>
            <TouchableOpacity onPress={props.onpress}>
                <Text>Calculate Data</Text>
            </TouchableOpacity>
        </View>
    )

}
let HocCal=HocExample3(CalCulationHoc)
export default  HocCal;