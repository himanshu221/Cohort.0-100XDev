import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let id = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title: "Go to Gym",
      description: "7-9 pm"
    },
    {
      id:2,
      title: "Study",
      description: "9-10 pm"
    },
    {
      id:3,
      title: "Read Book",
      description: "10-11 pm"
    }
  ])

  return (
    <div>
      <button onClick={() => {
        setTodos([...todos,{
          id: id++,
          title: "New Todo",
          description: "New Description"
        }])
      }}>Add Todo</button>
      {todos.map(todo => {
        return <Todo key={todo.id} title={todo.title} description={todo.description} />
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h3>{props.title}</h3>
    <h4>{props.description}</h4>
  </div>
}

export default App
