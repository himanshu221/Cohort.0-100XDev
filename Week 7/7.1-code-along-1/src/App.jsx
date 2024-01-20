import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './pages/landing'
import { Dashboard } from './pages/dashboard'
import './App.css'

function App() {
  
  return (
    <div>
      <div style={{
        backgroundColor: 'black', color: 'green'}} >
        This is the top bar
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
