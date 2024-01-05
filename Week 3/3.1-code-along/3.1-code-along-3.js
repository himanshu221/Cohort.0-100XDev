const e = require("express");
const express = require("express")
const app = express()
const zod = require("zod")

const schema = zod.array(zod.number());

/// Complex schemas can be written with zod
// const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8)
// })

app.use(express.json())
app.get("/health-check", (req, resp) => {
    const kidneys = req.body.kidneys;    
    const response = schema.safeParse(kidneys);
    
    if(!response.success){
        resp.status(411).json(response.error.issues)
    }else{
        resp.status(200).json("Kidneys are healthy")
    }
})

app.listen(3000)