import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// let state = {
//   count: 0
// }
// function App() {
//   // this is how to define state in react, we are given count as state variabel and setCount is a function which you call
//   // with updated state when you want to re-render state
//   const [count, setCount] =  useState(0);

//   // this part us same as updateState function ->  uodating the state and callinf the re-rendering function
//   function onClickHandler() {
//     setCount(count + 1);
//   }
//   // this part is same as buttonComponent function-> takes a state and returns a button element
//   return (
//     <>
//       <button onClick={onClickHandler}>Counter {count}</button>
//     </>
//   )
// }

// Better way to write the above code
function App() {
  const [state, setState] = useState(0);
  return (  
    <>
      <CustomButton count={state} setCount={setState}></CustomButton>
    </>
  )
}

// component
function CustomButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1)
  }
  return (
    <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  )
}
export default App

