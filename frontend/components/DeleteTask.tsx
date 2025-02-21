import { database } from "../../data/models/database";
import Task from "../../data/models/Task"; 


export const deleteTask = async(
    id:string,
    setTasks:React.Dispatch<React.SetStateAction<{id:string,title:string,createdAt: string}[]>>
)=>{
    try{
        await database.write(async()=>{
            const task= await database.get<Task>('task').find(id);  
            await task.markAsDeleted();
            await task.destroyPermanently();

            setTasks(prevTasks=>prevTasks.filter(task=>task.id !== id));
        })
    }catch(error){
        console.error("Error Deleting The Task",error);

    }
}