import express from 'express'
import { BACKEND_URL} from '@repo/common/config'

const app = express()

app.get('/health',(req, resp) => {
    console.log(BACKEND_URL)
    return resp.json({
        message: "healthy"
    })
})

app.listen(3004)

