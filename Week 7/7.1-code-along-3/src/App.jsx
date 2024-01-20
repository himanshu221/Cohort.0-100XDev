import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // anything whihc wants to use the context needs to be wrapped around by context.provider
  return (
    <div>
      <CountContext.Provider value={{
        count,
        setCount
      }}>
        <Count />
      </CountContext.Provider>
    </div>
  )
}

const Count = () => {
  return <div>
    <CountRender />
    <Buttons />
  </div>
}

const CountRender = () => {
  const {count} = useContext(CountContext)
  return <div>
    {count}
  </div>
}

const Buttons = () => {
  const {count, setCount} = useContext(CountContext)
  return <div>
    <button onClick={ () => {
      setCount(count + 1)
    }}>Increase Count</button>
    <button onClick={ () => {
      setCount(count - 1)
    }}>Decrease Count</button>
  </div>
}

export default App
