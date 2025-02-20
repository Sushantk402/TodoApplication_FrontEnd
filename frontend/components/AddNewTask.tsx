import { database } from "../../data/models/database";
import Task from "../../data/models/Task";
import { Alert } from "react-native";

export const addNewTask = async(
    taskText:string,
    setTasks:React.Dispatch<React.SetStateAction<{id:string,title:string,createdAt: string}[]>>,
    setTaskText:React.Dispatch<React.SetStateAction<string>>
)=>{
    if (!taskText.trim()) {
        Alert.alert("Error", "Task cannot be empty");
        return;
    }
    try{
        await database.write(async()=>{
            const newTask = await database.get<Task>("task").create(task =>{
                task.title=taskText;
                task.description = "New Task";
                task.createdAt = new Date();
            });
            setTasks(prevTasks => [...prevTasks,{id:newTask.id,title:newTask.title,createdAt: newTask.createdAt.toISOString().split("T")[0]}]);
            setTaskText("");
        })
    }catch(error){
        console.error("Error saving Task:",error);
    }
};