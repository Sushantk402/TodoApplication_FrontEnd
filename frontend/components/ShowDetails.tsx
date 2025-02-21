import { useEffect, useState } from "react";
import Task from "../../data/models/Task"
import { database } from "../../data/models/database";
import { Q } from "@nozbe/watermelondb";
import { Alert ,View,Text} from "react-native";
import React from "react";



const details = async (id: string): Promise<string> => {
    try{
        const showDate = database.get<Task>('task');
        const fetchedDate = await showDate.query(Q.where("id",id)).fetch();

        if(fetchedDate.length>0){
            return fetchedDate[0].createdAt.toISOString().split('T')[0];
        }
        else{
            return "Date not Found"
        }
    }catch(error){
        console.error("Error while fetching the Date",error)
        return "Error fetching date";
    }
}
    
export const ShowDetails:React.FC<{taskId:string}>=({taskId})=>{
    
    const [created,setCreated] =useState("");

    useEffect(()=>{
        const fetchdata = async()=>{
            const date = await details(taskId);
            setCreated(date);
        }
        fetchdata();
    },[taskId])

    return(
        <View>
            <Text style={{ fontSize: 12, color: "gray" }}>
                Task Created at : {created}
            </Text>
        </View>
    )
}