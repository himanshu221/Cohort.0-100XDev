import http from 'http'
import WebSocket, { WebSocketServer } from 'ws'

const server = http.createServer(function(request: any, response: any){
    console.log((new Date()) + `Received request for ` + request.url)
    response.end("hi there")
})

const wss = new WebSocketServer({server})

wss.on('connection', (ws) => {
    ws.on('error', console.error)
    ws.on('message', (data, isBinary) => {
        wss.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN){
                client.send(data, {binary: isBinary})
            }
        })
    })
    ws.send("Hello! You are connected to the web socket server")
})

server.listen(8000, function(){
    console.log((new Date()) + 'Server is listening on port 8000')
})