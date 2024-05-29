import React, { Component } from "react";
import { Text,Button } from "react-native";

class Counter2 extends Component {

    shouldComponentUpdate(nextProps){
        if(nextProps.value!==this.props.value){
            return true;
        }else{
            return false;
        }
        
    }
render() {
	console.log("Counter 2 is calling");
	return (
	<>
		<Text>Counter 2:</Text>
		<Text>{this.props.value}</Text>
		<Button title="Counter 2" onPress={this.props.onClick}>Add</Button>
	</>
	);
}
}

export default Counter2;
