import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, Alert } from "react-native";
import styles from "../components/Style";
import CustomEditButton from "../components/CustomEditButtton";
import CustomDeleteButton from "../components/CustomDeleteButton";
import Checkbox from "../components/Checkbox";
import CustomAddButton from "../components/CustomAddButton";
import { crud } from "../services/crud";

export type Task = {
    id: number;
    title: string;
};


const Home: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState("");
  
    useEffect(() => {
        crud.fetchTasks(setTasks);
    }, []);

    const handleAddTask = () =>{
        if(taskText.trim()){
            crud.addNewTask(taskText,setTasks,setTaskText)
        }
    };

    const handleEditTask = (id : number,title : string) =>{
        crud.editTask(id,title);
    };

    const handleDeleteTask = (id : number) =>{
        crud.deleteTask(id,setTasks);
    };

    return (
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
                <CustomAddButton title="Add" onPress={handleAddTask} />
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.buttons}>
                    <Text style={styles.todo}>TO DO</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                {tasks.map((task) => (
                    <View key={task.id}>
                        <View style={styles.row}>
                            <Checkbox />
                            <TextInput
                                value={task.title}
                                style={[styles.textInput, { width: "70%" }]}
                                onChangeText={(text) =>
                                    setTasks((prevTask) =>
                                        prevTask.map((t) =>
                                            t.id === task.id ? { ...t, title: text } : t
                                        )
                                    )
                                }
                            />
                             <CustomEditButton
                                title="Edit"
                                onPress={() => handleEditTask(task.id, task.title)}
                            />

                            <CustomDeleteButton
                                title="Delete"
                                onPress={() => handleDeleteTask(task.id)}
                            />
                        </View>

                        
                    </View>
                ))}
            </ScrollView>
        </>
    );
};

export default Home;