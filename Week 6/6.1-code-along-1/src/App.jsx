import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [title, updateTitle] = useState("Himanshu");
  return (
    <div>
      <TitleChange updateTitle={updateTitle} />
      <Header title={title} />
      <Header title={"Bhushan1"} />
      <Header title={"Bhushan2"} />
      <Header title={"Bhushan3"} />
      <Header title={"Bhushan4"} />
      <Header title={"Bhushan5"} />
    </div>
  )
    
}
function TitleChange({updateTitle}){
  return <button onClick={() => {
    {updateTitle(Math.random())}
  }}>Click me to change the title</button>
}
// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

const Header = memo(({title}) => {
    return <div>
      {title}
    </div>
})

export default App
