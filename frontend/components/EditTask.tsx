import { Alert } from "react-native";
import { database } from "../../data/models/database";
import Task from "../../data/models/Task"; 

export const editTask = async(
id:string,
newTitle:string,
setTasks:React.Dispatch<React.SetStateAction<{id:string,title:string}[]>>)=>{
    if(!newTitle.trim()){
        Alert.alert("Error","Task title cannot be empty")
    }

    try{
        await database.write(async () => {
            const task = await database.get<Task>('task').find(id);
            await task.update(task =>{
                task.title=newTitle;
            });
            setTasks(prevTask=>prevTask.map(task=>(task.id===id?{...task,title:newTitle}:task)))
        });
    }catch(error){
        console.error("Error editing task:", error);
        Alert.alert("Error", "Could not edit task.");
    }

}