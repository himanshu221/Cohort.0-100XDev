import { lazy } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Suspense } from 'react'
// import { Dashboard } from './pages/dashboard'
// Lazy Routing
const Dashboard = lazy(() => import('./pages/dashboard'))
const Landing = lazy(() => import('./pages/landing'))

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/dashboard' element={
            <Suspense fallback={'...Loading'}>
              <Dashboard />
            </Suspense>
            }></Route>
          <Route path='/' element={
            <Suspense fallback={'...Loading'}>
              <Landing />
            </Suspense> 
          }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const AppBar = () => {
  const navigate = useNavigate();
  return <div style={{
    height: '50px',
    backgroundColor: 'green'
  }}>
    <button onClick={ () => {
     navigate('/')
    }}>Landing Page</button>
    <button onClick={() => {
      navigate('/dashboard')
    }}>Dashboard</button>
  </div>
}

export default App
