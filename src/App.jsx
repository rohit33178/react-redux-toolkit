import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoLists from './components/TodoLists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>React Redux-toolkit</h2>
     <div className='w-50 flex'>
      <AddTodo />
      <TodoLists />
     </div>
    </>
  )
}

export default App
