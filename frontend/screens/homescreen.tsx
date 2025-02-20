    import React, { useEffect, useState } from "react";
    import { View,Text,Button, TextInput, ScrollView, Alert, } from "react-native";
    import styles from "../components/Style"; 
    import CustomEditButton from "../components/CustomEditButtton";
    import CustomDeleteButton from "../components/CustomDeleteButton";
    import Checkbox from "../components/Checkbox";
    import { addNewTask } from "../components/AddNewTask";
    import { deleteTask } from "../components/DeleteTask";
    import { editTask } from "../components/EditTask";
    import CustomAddButton from "../components/CustomAddButton";
    import { database } from "../../data/models/database";
    import Task from "../../data/models/Task"; 

    const Home:React.FC=()=>{
        const [tasks, setTasks] = useState<{ id: string; title: string;createdAt: string }[]>([]);
        const [taskText, setTaskText] = useState("");   

        const fetchTasks = async () =>{
            try{
                const taskCollection = database.get<Task>('task');
                const fetchedTasks = await taskCollection.query().fetch();

                setTasks(fetchedTasks.map(task => ({id:task.id,title:task.title,createdAt:task.createdAt.toISOString().split("T")[0]})));
            }catch(error){
                console.error("Error fetching tasks:", error);
                Alert.alert("Error", "Could not load tasks.");
            }
        };

        useEffect(()=>{
            fetchTasks();
        },[])

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
                        <TextInput 
                        value={task.title}
                        style={[styles.textInput ,{width:'55%'} ]}
                        onChangeText={(text)=>
                            setTasks(prevTask=>prevTask.map(t=>t.id===task.id?{...t,title:text}:t))
                        }
                        ></TextInput>
                        
                        <CustomEditButton title="Edit" onPress={() => editTask(task.id,task.title,setTasks)} />
                        <CustomDeleteButton title="Delete" onPress={()=>deleteTask(task.id,setTasks)} />
                        <Text style={{ fontSize: 10, color: "gray" }}>{task.createdAt}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* <View style={styles.bottomtap}>
                <Button title="All Task" color={"#bfb0b0"} />
            </View> */}
            </>
        )   
    }





    export default Home;