import  {ADD_TODO} from './Types'
import { v4 as uuidv4 } from 'uuid';

 export const addTodo = (newTodo) =>{
    return{
        type:ADD_TODO,
        payload: {...newTodo , id:uuidv4() , isDone:false}
    };
}