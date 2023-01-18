import { ADD_TODO } from "../actions/Types";




const initState ={
    todos:[{ id:"01" , description:"first ToDo ", isDone:false},
           { id:"02" , description:" second ToDo", isDone:false}
]
}

const TodoReducer =(state=initState ,{type,payload} )=>{
     
   switch (type) {
      case ADD_TODO:
       return {
       ...state,
       todos:{...state.todos , payload}
      }
      default:
            return state
   } 
     
     
     
     
     
      
}

export default TodoReducer