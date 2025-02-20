import React from "react";
import { TouchableOpacity,Text, GestureResponderEvent } from "react-native";
import styles from "./Style";

interface CustomButtonProps{
    title:String,
    onPress:(event:GestureResponderEvent) =>void;
}



const CustomEditButton:React.FC<CustomButtonProps> = ({ title, onPress }) => {
    return (
      <TouchableOpacity style={styles.editButton} onPress={onPress}>
        <Text style={styles.editButtonText}>{title}</Text>
      </TouchableOpacity> 
    );
  };

export default CustomEditButton;