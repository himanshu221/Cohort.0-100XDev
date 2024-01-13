import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo} from './components/CreateTodo'
import { Todo } from './components/Todo'

function App() {
  let [todos, setTodos] = useState([])
  console.log(todos)
  return (
  <>
    <div className='top-container'>
      <CreateTodo todos={todos} setTodos={setTodos} />
    </div>
    <div className='bottom-container'>
      <Todo todos={todos} />
    </div>
  </>
  )
}

export default App
