import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch('https://sum-server.100xdevs.com/todos')
      .then(async (resp) => {
        const respTodo = await resp.json();
        setTodos(respTodo.todos)
      })
    }, 20000)
  },[])

  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>
}

function Todo(props){
  return <div>
    <h3>{props.title}</h3>
    <h5>{props.description}</h5>
  </div>
}
export default App
