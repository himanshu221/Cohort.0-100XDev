import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodo] = useState([])

  return (
    <>
      <AddTodoButton state={todos} setState={setTodo}></AddTodoButton>
      {todos.map(todo => {
        return <Todo title={todo.title} desc={todo.description} />
      })}
    </>
  )
}
function Todo(props){
  return <div>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </div>
}
function AddTodoButton(props){
  return <button onClick={() => {
      props.setState([...props.state,{
        title: "New Title",
        description: "New Description"
      }])
    }}>Add Todo</button>
}


export default App
