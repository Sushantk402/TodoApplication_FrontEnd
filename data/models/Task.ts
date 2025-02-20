import {Model} from '@nozbe/watermelondb'
import { field, date } from '@nozbe/watermelondb/decorators';

export default class Task extends Model{
    static table = 'task';
    
    //@ts-ignore
    @field('title') title!: string
    //@ts-ignore
    @field('description') description!:string
    //@ts-ignore
    @date('created_at') createdAt!: Date

}