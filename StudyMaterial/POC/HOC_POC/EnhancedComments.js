import React, { Component } from "react";
import { Text, TouchableOpacity,View } from "react-native";
import hoc from "./HocCom";

const CommentsCount = (props) => {

    return (
        <View style={{marginTop:20}}>
            <Text>{props.countNumber} </Text>
            <TouchableOpacity onPress={props.handleClick}>
                <Text>Add Comment!</Text>
            </TouchableOpacity>
        </View>
    );
}

const EnhancedComments = hoc(CommentsCount, 10);

export default EnhancedComments;