import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/TodoAction'

function AddTodo() {
const dispatch = useDispatch()
const [input,setInput]=useState({description:''})

const AddNewTodo =()=>{
  dispatch(addTodo(input))
}

  return (
    <div>
      <input type='text' placeholder='write your task' onChange={e=>setInput({description:e.target.value})}></input>
      <button onClick={AddNewTodo}>Add new todo</button>
    </div>
  )
}

export default AddTodo
