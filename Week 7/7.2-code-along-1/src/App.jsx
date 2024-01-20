import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'
import { useContext } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { EvenSelector, countAtom } from './store/atoms/count'

function App() {

  // anything whihc wants to use the context needs to be wrapped around by context.provider
  return (
      <RecoilRoot>
        <Count />
      </RecoilRoot>
  )
}

const Count = () => {
  console.log("Count rendered")
  return <div>
    <CountRender />
    <Buttons />
    <EvenComponent />
  </div>
}
const EvenComponent = () => {
  const isEven = useRecoilValue(EvenSelector)
  return <div>
    {isEven ? "Count is Even" : null}
  </div>
}
const CountRender = () => {
  console.log("CountRender rendered")
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}

const Buttons = () => {
  console.log("button rendered")
  const setCount = useSetRecoilState(countAtom)

  return <div>
    <button onClick={ () => {
      setCount(count => count + 1)
    }}>Increase Count</button>
    <button onClick={ () => {
      setCount(count => count - 1)
    }}>Decrease Count</button>
  </div>
}

export default App
