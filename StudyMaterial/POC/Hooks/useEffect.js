import React, { useState } from "react";
import { Button, Text, View } from 'react-native'

const HooksMethod=()=>{
    const [count,setCount] =useState(0)

// this will run when the component mounts and anytime the stateful data changes
// React.useEffect(() => {
//     alert('Hey, Nads here!');
// });

// this will run, when the component is first initialized
React.useEffect(() => {
    alert('Hey, Nads here!');
}, []);

// this will run only when count state changes
React.useEffect(() => {
    fetch('nads').then(() => setLoaded(true));
}, [count]);

// this will run when the component is destroyed or before the component is removed from UI.
// React.useEffect(() => {
//     alert('Hey, Nads here');

//     return () => alert('Goodbye Component');
// });

const show=()=>{
    setCount(count+1)
}
    return(
        <View>
            <Text>Hii</Text>
            <Button  title="click me " onPress={show}/>
        </View>
    )

}

export default HooksMethod;