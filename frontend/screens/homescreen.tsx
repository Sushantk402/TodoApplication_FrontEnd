    import React, { useState } from "react";
    import { View,Text,Button, TextInput, ScrollView, Alert} from "react-native";
    import styles from "../components/Style"; 
    import CustomEditButton from "../components/CustomEditButtton";
    import CustomDeleteButton from "../components/CustomDeleteButton";
    import Checkbox from "../components/Checkbox";
    import { database } from "../../data/models/database";
    import Task from "../../data/models/Task";

    const Home:React.FC=()=>{
        const [tasks, setTasks] = useState<{ id: string; title: string }[]>([]);
        const [taskText, setTaskText] = useState("");

        const addNewTask=async ()=>{
            if(!taskText.trim()){
                Alert.alert("Error","Task cannot be empty");
                return;
            }

            try{
                await database.write(async()=>{
                    const newTask = await database.get<Task>('task').create(task=>{
                        task.title=taskText;
                        task.description="New Task";
                        task.createdAt=new Date();
                    });
                    setTasks(prevTasks => [...prevTasks, { id: newTask.id, title: newTask.title }]);
                    setTaskText(""); 
                })
            }catch(error){
                console.error("Error saving task :",error);
            }
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
            
            <View style={styles.row}>
             
             <TextInput 
              value={taskText}
              placeholder="Enter the task"
              style={styles.textInput} 
              onChangeText={setTaskText}
              />

             <CustomEditButton title="Add" onPress={addNewTask} />
            </View>

            <View style={styles.buttonContainer}> 
                <View style={styles.buttons}>
                    <Button  title="new Task" color={"#bfb0b0"} onPress={addNewTask} />
                </View>
            </View> 

            <ScrollView  contentContainerStyle={styles.contentContainer}>
                {tasks.map((task)=>(
                    <View key={task.id} style={styles.row}>
                        <Checkbox />
                        <Text>{task.title}</Text>
                        <CustomEditButton title="Edit" onPress={() => console.log("Edit task")} />
                        <CustomDeleteButton title="Delete" onPress={() => console.log("Delete task")} />
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