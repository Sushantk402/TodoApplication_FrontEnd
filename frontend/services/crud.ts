
import { Alert } from "react-native";
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


export const crud = {
  
    fetchTasks : async (setTasks:React.Dispatch<React.SetStateAction<Task[]>>) => {
        try {
            const todos = await apiClientInstance.getAllTodos();
            const newTasks = todos
                .filter((task) => task.id !== undefined)
                .map((task) => ({
                    id: task.id as number, 
                    title: task.title,
            }));
        setTasks(newTasks);
        }
        catch (error) {
            console.error("Error fetching tasks:", error);  
            Alert.alert("Error", "Could not load tasks.");
        }
    },
    addNewTask : async (
                        title : string,
                        setTasks : React.Dispatch<React.SetStateAction<Task[]>>,
                        setTaskText : React.Dispatch<React.SetStateAction<string>>
                        ) => {
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
    },

    editTask : async(id: number,title:string)=>{
        try{
             await apiClientInstance.updateTodo({id,todo:{title} as Todo});
            
        }catch(error){
            console.error("Error while editing the task : ",error);
            Alert.alert("Error","Could not edit the task");
        }
    },

    deleteTask : async( 
                        id : number,
                        setTasks : React.Dispatch<React.SetStateAction<Task[]>>    
                      )=>{
        try{
            await apiClientInstance.deleteTodo({id});
            setTasks((prev)=>prev.filter((task)=>task.id !== id));  
        }
        catch(error){
            console.error("Error while deleting the task : ",error);
            Alert.alert("Error","Could not delete the taask");
        }
    }

    

}

    


