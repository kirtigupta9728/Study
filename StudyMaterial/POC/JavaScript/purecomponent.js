import React, { Component } from "react";
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native'

class PureComponentExample extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = { 
            count: 0 }
      }
    
      static getDerivedStateFromProps(props,state){

        console.log("props::",props,"statr",state);

      }

    render(){
        console.warn("count",this.state.count)
        return<>
            <Text  style={{color:'red'}} >{"kirti gupta "+this.state.count}</Text>
           
       <SafeAreaView>
        <TouchableOpacity style={{width:200,height:100,margin:40,borderWidth:1,borderColor:'red'}} onPress={()=>this.setState({count:this.state.count+1})}>
        <Text >okkk</Text>
        </TouchableOpacity>
        </SafeAreaView>
        </>
    }


}

export default PureComponentExample;