import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../app/slice/todoSlice'

const AddTodo = () => {
  const [input, setInput] = useState("")  
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const handleTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput("")
  }  

  useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
  }, [input])
  
  return (
    <div>
        <h2>Add Todo</h2>
        <form onSubmit={handleTodo}>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button>
                Add Todo
            </button>
        </form>
    </div>
  )
}

export default AddTodo