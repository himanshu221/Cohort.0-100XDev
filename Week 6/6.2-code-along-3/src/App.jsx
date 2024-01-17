import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { memo } from 'react'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const onClickHandler = useCallback(()=> {
    console.log("Hello Button")
  },[])
  return (
    <div>
      <HelloButton onclick={onClickHandler} />
      <Button count={count} setCount={setCount} />
    </div>
  )
}

const HelloButton = memo(({onclick}) => {
  console.log("Child was clicked")
  return <button onClick={onclick}>ChildButton</button>
})
const Button = (props) => {
  return <button onClick={() => {
      props.setCount(props.count + 1)
  }}>Counter is {props.count}</button>
}

export default App
