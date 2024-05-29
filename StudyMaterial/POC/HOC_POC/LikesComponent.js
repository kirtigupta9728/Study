import { Button, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import hoc from "./HocCom";

const LikesCount = (props) => {
    console.log('props', props.countNumber)

    return (
        <SafeAreaView style={{marginTop:50}}>
            <Text style={{ color: '#000' }}>{props.countNumber} </Text>
            <TouchableOpacity onPress={props.handleClick}>
                <Text>{"Like👍🏻" + props.countNumber} </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )



}

const EnhancedLikes = hoc(LikesCount, 5);

export default EnhancedLikes;