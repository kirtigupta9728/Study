import React from "react";
import { Text ,View} from 'react-native'

const ChildComponent=(props)=>{
 console.log("chaild data")

    return(
        <View>
            <Text>{"Hiiii "+props.name}</Text>
        </View>
    )

}

export default React.memo(ChildComponent);