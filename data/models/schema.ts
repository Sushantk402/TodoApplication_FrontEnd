import { appSchema,tableSchema } from "@nozbe/watermelondb";

export const mySchema = appSchema({
    version:1,
    tables:[
        tableSchema({
            name:'task',
            columns:[
                {name:'title',type:'string'},
                {name:'description',type:'string'},
                {name:'created_at',type:'number'}
            ]
        })
    ]
})