import { useState } from 'react'
import {useRecoilValue, RecoilRoot} from 'recoil'
import './App.css'
import { todoAtomFamily } from './store/atoms/todo'

function App() {

  return (
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={2}/>
    </RecoilRoot>
  )
}

function Todo({id}) {
  const todoItem = useRecoilValue(todoAtomFamily(id))
  return <div>
    <h4>{todoItem.title}</h4>
    <h3>{todoItem.description}</h3>
  </div>
}

export default App
