import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, Alert } from "react-native";
import styles from "../components/Style";
import CustomEditButton from "../components/CustomEditButtton";
import CustomDeleteButton from "../components/CustomDeleteButton";
import Checkbox from "../components/Checkbox";
import CustomAddButton from "../components/CustomAddButton";
import CustomDetailButton from "../components/CustomDetailButton";
import { ShowDetails } from "../components/ShowDetails";
import { TodoControllerApi ,Configuration } from "../api";
import { apiClient } from "../client";

const apiClientInstance = apiClient();

type Task = {
    id: number;
    title: string;
};

type Todo = {
    id: number;
    title: string;
    createdAt: Date; 
};

const Home: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState("");
    const [showDetailsTaskId, setShowDetailsTaskId] = useState<number | null>(null);

    const fetchTasks = async () => {
        try {
            const todos = await apiClientInstance.getAllTodos();
            const newTasks = todos
            .filter((task) => task.id !== undefined)
            .map((task) => ({
                id: task.id as number, 
                title: task.title,
            }));
        setTasks(newTasks);
        
        } catch (error) {
            console.error("Error fetching tasks:", error);  
            Alert.alert("Error", "Could not load tasks.");
        }
    };

    const addNewTask = async (title: string) => {
        try {
            const newTask = await apiClientInstance.createTodo({ todo: { title } as Todo });
            setTasks((prev) => [
                ...prev,
                {
                    id: newTask.id!,
                    title: newTask.title,
                },
            ]);
            setTaskText("");
        } catch (error) {
            console.error("Error adding task: ", error);
            Alert.alert("Error", "Could not add task");
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

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
                <CustomAddButton title="Add" onPress={() => addNewTask(taskText)} />
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
                                style={[styles.textInput, { width: "55%" }]}
                                onChangeText={(text) =>
                                    setTasks((prevTask) =>
                                        prevTask.map((t) =>
                                            t.id === task.id ? { ...t, title: text } : t
                                        )
                                    )
                                }
                            />
                            {/* <CustomEditButton
                                title="Edit"
                                onPress={() => editTask(task.id, task.title, setTasks)}
                            />
                            <CustomDeleteButton
                                title="Delete"
                                onPress={() => deleteTask(task.id, setTasks)}
                            /> */}
                            <CustomDetailButton
                                title="Details"
                                onPress={() => setShowDetailsTaskId(task.id)}
                            />
                        </View>

                        {/* {showDetailsTaskId === task.id && (
                            <View style={{ marginBottom: 7, paddingHorizontal: 5 }}>
                                <ShowDetails taskId={task.id} />
                            </View>
                        )} */}
                    </View>
                ))}
            </ScrollView>
        </>
    );
};

export default Home;