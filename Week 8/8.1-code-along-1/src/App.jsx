import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <div style={{
    display: 'flex',
    justifyContent:'space-around'
    }}>
      <div style={{backgroundColor:'red'}}>Red</div>
      <div style={{backgroundColor:'green'}}>Green</div>
      <div style={{backgroundColor:'wheat'}}>Wheat</div>
    </div>

    <div className='flex justify-around'>
        <div className='bg-red-500'>Red</div>
        <div className='bg-green-500'>Green</div>
        <div className='bg-yellow-500'>Yellow</div>
    </div>

    <div className='grid grid-cols-3'>
      <div className='bg-red-500'>Red</div>
      <div className='bg-green-500'>Green</div>
      <div className='bg-yellow-500'>Yellow</div>
    </div>
    <div className='grid grid-cols-10'>
      <div className='bg-red-500 col-span-4'>Red</div>
      <div className='bg-green-500 col-span-4'>Green</div>
      <div className='bg-yellow-500 col-span-2'>Yellow</div>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
      <div className='bg-red-500'>Red</div>
      <div className='bg-green-500'>Green</div>
      <div className='bg-yellow-500'>Yellow</div>
    </div>

  </>)
}

export default App
