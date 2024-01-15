import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
  <CardComponent>
    <div>
        Hi there
    </div>
  </CardComponent>
  )
}

// function TextComponent(){
//   return <div>
//     Hi there
//   </div>
// }
function CardComponent({children}) {
  return <div style={{
    border: "2px solid black",
    width: "200px",
    height: "200px"
  }}>
    {children}
  </div>
}
export default App
