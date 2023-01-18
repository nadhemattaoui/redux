import React from 'react'
import Todo from './Todo'

function TodoList({allTodos}) {
  return (
    <div>
      {allTodos.map((el,i)=> <Todo el ={el} key ={i}/>)
      }
    </div>
  )

    }
export default TodoList
