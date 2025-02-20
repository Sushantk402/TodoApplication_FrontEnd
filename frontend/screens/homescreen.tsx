import React, { useState } from "react";
import { View,Text,Button, TextInput, ScrollView, Alert} from "react-native";
import styles from "../components/Style"; 
import CustomEditButton from "../components/CustomEditButtton";
import CustomDeleteButton from "../components/CustomDeleteButton";
import Checkbox from "../components/Checkbox";

const Home:React.FC=()=>{
    const[inputBox,setInputBox]=useState<number[]>([]);

    const addNewTask =() =>{
        setInputBox([...inputBox,Date.now()])
    }


    const editTask=(id:number)=>{
        Alert.alert("Edit task")
    }

    const deletetask=()=>{
        return(
        <Text style={styles.text}>All Task</Text>
        )
        }

    return(
        <>
        <View style={styles.mainTitle}>
            <Text style={styles.text}>Task For the Day</Text>
        </View>    
        
        <ScrollView  contentContainerStyle={styles.contentContainer}>
        <View>
        {inputBox.map((id)=>(
            <View key={id} style={styles.inputRow}>
                <View>
                   <Checkbox />
                </View>
                
                <TextInput value=""
                 placeholder="Enter the task"
                 style={styles.textInput} 
                //  onChange={addTask}
                />
                 <View >
                    <CustomEditButton  title="Edit" onPress={ (event)=>editTask(id)}  />
                 </View>
                 <View>
                    <CustomDeleteButton title="Delete" onPress={deletetask} />
                 </View>
            </View>
        ))}
        </View>
        
        <View style={styles.buttonContainer}> 
            <View style={styles.buttons}>
                <Button  title="new Task" color={"#bfb0b0"} onPress={addNewTask} />
            </View>
        </View> 
        </ScrollView>

        <View style={styles.bottomtap}>
            <Button title="All Task" color={"#bfb0b0"} onPress={addNewTask} />
        </View>
        </>
    )   
}





export default Home;