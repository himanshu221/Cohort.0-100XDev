const e = require("express");
const express = require("express")
const app = express()

app.use(express.json())
app.get("/health-check", (req, resp) => {

    const kidneys = req.body.kidneys;    
    const kidneyLength = kidneys.length;
    resp.send("You have " + kidneyLength + " kidneys")
})

// global catches or error handling middlewares
app.use((err, req, resp, next) => {
    console.log(err)
    resp.send("Something is up with your backend")
} )
app.listen(3000)