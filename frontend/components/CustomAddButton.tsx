import React from "react";
import { TouchableOpacity,Text, GestureResponderEvent } from "react-native";
import styles from "./Style";

interface CustomButtonProps{
    title:String,
    onPress:(event:GestureResponderEvent) =>void;
}



const CustomAddButton:React.FC<CustomButtonProps> = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.editaddButton} onPress={onPress}>
        <Text style={styles.editButtonText}>{title}</Text>
      </TouchableOpacity> 
    );
  };

export default CustomAddButton;