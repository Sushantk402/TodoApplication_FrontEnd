    import React, { useState } from "react";
    import { View,Text,Button, TextInput, ScrollView, Alert} from "react-native";
    import styles from "../components/Style"; 
    import CustomEditButton from "../components/CustomEditButtton";
    import CustomDeleteButton from "../components/CustomDeleteButton";
    import Checkbox from "../components/Checkbox";
    import { addNewTask } from "../components/AddNewTask";
    import { deleteTask } from "../components/DeleteTask";
    import CustomAddButton from "../components/CustomAddButton";

    const Home:React.FC=()=>{
        const [tasks, setTasks] = useState<{ id: string; title: string }[]>([]);
        const [taskText, setTaskText] = useState("");    

        const editTask=(id:number)=>{
            Alert.alert("Edit task")
        }

        return(
            <>
            <View style={styles.mainTitle}>
                <Text style={styles.text}>Task For the Day</Text>
            </View>    
            
            <View style={styles.row}>
             
             <TextInput 
              value={taskText}
              placeholder="Enter the task"
              style={styles.textInput} 
              onChangeText={setTaskText}
              />

             <CustomAddButton title="Add" onPress={()=>addNewTask(taskText,setTasks,setTaskText)} />
            </View>

            <View style={styles.buttonContainer}> 
                <View style={styles.buttons}>
                    <Text style={styles.todo}>TO DO</Text>
                </View>
            </View> 

            <ScrollView  contentContainerStyle={styles.contentContainer}>
                {tasks.map((task)=>(
                    <View key={task.id} style={styles.row}>
                        <Checkbox />
                        <Text style={styles.todotext}>{task.title}</Text>
                        <CustomEditButton title="Edit" onPress={() => console.log("Edit task")} />
                        <CustomDeleteButton title="Delete" onPress={()=>deleteTask(task.id,setTasks)} />
                    </View>
                ))}
            </ScrollView>

            <View style={styles.bottomtap}>
                <Button title="All Task" color={"#bfb0b0"} />
            </View>
            </>
        )   
    }





    export default Home;