"use client"
import { useEffect, useState } from "react"
import axios from 'axios'

const arr = ["banana", "apple", ""]
export default function Interactive() {
  const [count, setCount] = useState(0)
  const [word, setWord] = useState("")

  useEffect(() => {
      setTimeout(() => {
        setWord("Banana")
      })
  },[])
    return (
        <div className="h-screen flex justify-center items-center">
          <div className="flex flex-col justify-center">
            <h1>Welcome to Interactive Page</h1>
            <button className="p-3 border-2 mt-3 rounded-lg" onClick={() => setCount(count+1)}>Count is {count}</button>
          </div>
          <div>
            {word}
          </div>
        </div>
    )
  }
  