import React, { useState } from "react";
import { TouchableOpacity,Text, View } from "react-native";
import styles from "./Style";

const Checkbox:React.FC=()=>{
      const[checked,setChecked]=useState(false);

      const toggleCheckBox=()=>{
        setChecked(!checked);
      }

    return(
        <TouchableOpacity  style={styles.checkboxContainer} onPress={toggleCheckBox} >
            <View style={[styles.checkbox,checked && styles.checkboxchecked]}>
                {checked && <Text style={styles.checkmark}>!</Text>}
            </View>
        </TouchableOpacity>
    )
}

export default Checkbox;