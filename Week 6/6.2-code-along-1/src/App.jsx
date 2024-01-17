import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [id, setId] = useState(1)

  return <div>
    <button onClick={(e) => {
        setId(1)
    }}>1</button>
    <button onClick={(e) => {
        setId(2)
      }}>2</button>
    <button onClick={(e) => {
        setId(3)
      }}>3</button>
    <button onClick={(e) => {
        setId(4)
      }}>4</button>
    <Todo id={id} /> 
  </div>
}

const Todo = ({id}) => {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then((resp) => {
      setTodo(resp.data.todo)
    })
  },[id]) // we need to specify id to run useEffect callback to fetch the new todo
  return <div>
    <h3>{todo.title}</h3>
    <h4>{todo.description}</h4>
  </div>
}

export default App
