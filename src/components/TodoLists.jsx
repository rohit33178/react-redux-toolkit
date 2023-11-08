import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { store } from '../app/store/store'
import { addTodo, removeTodo } from '../app/slice/todoSlice'

const TodoLists = () => {
  const todos = useSelector(state => state.todos)  
    const dispatch = useDispatch();


  return (
    <div>
        <h3>All Todos</h3>
        <hr />
        <div className='card'>
        {todos.map(todo => (
            <p key={todo.id}>
                {todo.text}
            </p>
        ))}
        </div>    
    </div>
  )
}

export default TodoLists