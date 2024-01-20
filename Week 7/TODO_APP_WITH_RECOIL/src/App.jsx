import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot } from 'recoil'
import { CreateTodo } from './components/CreateTodo'
import { FilterTodo } from './components/FilterTodo'
import { DisplayTodo } from './components/DisplayTodo'

function App() {

  return (
      <RecoilRoot>
        <CreateTodo />
        <FilterTodo />
        <DisplayTodo />
      </RecoilRoot>
  )
}

export default App
