import { useEffect, useState } from 'react'
function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [input, setInput] = useState<string>("")
  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => {
      const newSocket = new WebSocket('ws://localhost:8000')
      newSocket.onopen = () => {
        console.log("Connection to socker established")
        setSocket(newSocket)
      }
      newSocket.onmessage = (message: MessageEvent<string>) => {
        console.log(messages)
        setMessages([...messages, message.data])
        console.log(messages)
      }
      return () => newSocket.close()
  },[])

  if(!socket){
    return <div>
      Connecting to web socket server ....
    </div>
  }
  return (
      <div>
        <div>
          <input type="text" placeholder='Write here' onChange={(e) => {
            setInput(e.target.value)
          }}/>
        </div>
        <div>
          <button onClick={() => {
            socket?.send(input)
          }}>Send Message</button>
        </div>
        {messages.map(ms => {
          return <div>
            {ms}
          </div>
        })}
      </div>
  )
}

export default App
