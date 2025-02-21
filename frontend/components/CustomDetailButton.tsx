import React from "react";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import styles from "./Style";

interface CustomDelete{
    title:String,
    onPress:(event:GestureResponderEvent)=>void
}

const CustomDetailButton:React.FC<CustomDelete>=({title,onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={[styles.editButton,{width:34,height:34,borderRadius: 17}]}>
        <Text style={styles.editButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomDetailButton;