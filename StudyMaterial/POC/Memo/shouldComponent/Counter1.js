import React, { Component } from "react";
import { Button, Text } from "react-native";

class Counter1 extends Component {
     
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.value==this.props.value){
            return false;
        }else{
            return true;
        }
        
    }
   

    getSnapshotBeforeUpdate(prevState){
        console.log('getSnapshotBeforeUpdate',prevState);
        return prevState;
    }
    componentDidUpdate(prevState,prevProps,snapshot){

        console.log("componentDidUpdate",prevState,prevProps,snapshot)
       // return state;
    }
render() {
	console.log("Counter 1 is calling");
	return (
	<>
		<Text>Counter 1:</Text>
		<Text>{this.props.value}</Text>
		<Button title="Counter 1 " onPress={this.props.onClick}>Add</Button>
	</>
	);
}
}

export default Counter1;
