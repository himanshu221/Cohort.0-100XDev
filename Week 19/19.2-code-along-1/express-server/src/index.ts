import express from 'express'
import { createClient } from 'redis'

const app = express()
const redisClient = createClient()
redisClient.on('error', console.error)

app.use(express.json())

app.post("/submit", async (req, resp) => {
    const userId = req.body.userId
    const problemId = req.body.problemId
    const code = req.body.code
    const lang = req.body.language

    try{
        await redisClient.LPUSH("problems", JSON.stringify({ userId, problemId, code, lang}))
        resp.json({
            message: "Successfully submited"
        })
    }catch(e) {
        console.error("Failed to submit to redis queue", e)
        resp.status(500).json({
            message: "Failed to submit to redis queue"
        })
    }
})

async function connectToRedis() {
    try{
        await redisClient.connect()

        app.listen(3000, () => {
            console.log(
                "Server started on port 3000"
            )
        })
    }catch(e){
        console.error("Failed to connect to redis", e)
    }
}

connectToRedis()