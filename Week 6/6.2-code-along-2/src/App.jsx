import { useState, useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  let [counter, setCounter] = useState(0)
  let [input, setInput] = useState(0)


  let sum = useMemo(() => {
    let sum = 0;
    for(let i = 1; i <= input; ++i)
      sum += i;
    return sum
  },[input]) // useMemo is used when we have some expensive operation on a state variable and want to do it 
  // anytime the associated state variable changed

  return (
    <div>
      <input type="text" onChange={(e) =>{
        setInput(e.target.value)
      }} />
      <div>
          Sum is {sum}
      </div>
      <button onClick={() => {
            setCounter(counter+1)
      }}>Counter is {counter}</button>
    </div>
  )
}

export default App
