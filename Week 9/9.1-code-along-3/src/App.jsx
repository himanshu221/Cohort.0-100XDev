import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

// function App() {
//   const isOnline = useIsOnline()

//   return (
//     <>
//       {isOnline ? <div>'You are online'</div> : <div>'You are offline"</div>}
//     </>
//   )
// }

// function useIsOnline() {
//   const [online, setOnline] = useState(window.navigator.onLine)
//   useEffect(() => {
//       window.addEventListener('online', () => setOnline(true))
//       window.addEventListener('offline', () => setOnline(false))
//   },[])
//   return online
// }

function App() {
  const position = useMousePointer()

  return (
    <div>
      Position of move is at : {position.x} {position.y}
    </div>
  )
}

function useMousePointer() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    })
    return () => {
      window.removeEventListener('mousemove', (e) => {
        setPosition({
          x: e.pageX,
          y: e.pageY
        })
      })
    }
  },[])
 
  return position
}

export default App
