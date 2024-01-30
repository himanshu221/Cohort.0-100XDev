import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
    display: 'flex',
    justifyContent:'center'
    }}>
      <div style={{backgroundColor:'red'}}>Red</div>
      <div style={{backgroundColor:'green'}}>Green</div>
      <div style={{backgroundColor:'wheat'}}>Wheat</div>
    </div>

  )
}

export default App
