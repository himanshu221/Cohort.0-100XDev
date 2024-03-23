import express from 'express'

const app = express()

app.get('/health',(req, resp) => {
    return resp.json({
        message: "healthy"
    })
})

app.listen(3004)

