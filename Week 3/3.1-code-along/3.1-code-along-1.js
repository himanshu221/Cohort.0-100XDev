const express = require("express")
const app = express()

const authMiddleware = (req, resp, next) => {
    const userName = req.headers.username;
    const passWord = req.headers.password;

    if(userName != "himanshu" || passWord != "123"){
        resp.status(403).json({
            msg: "User is not authorized"
        })
        return;
    }
    next();
}

const validationMiddleware = (req, resp, next) => {
    const kidneyId = req.query.kidneyid;
    if(kidneyId < 1 || kidneyId > 2){
        resp.status(400).json({
            msg : "Bad Input"
        })
        return;
    }
    next();
}

app.get("/health-check", authMiddleware, validationMiddleware,  (req, resp) => {
    // const userName = req.headers.username;
    // const passWord = req.headers.password;
    // const kidneyId = req.query.kidneyid;

    // if(userName != "himanshu" || passWord != "123"){
    //     resp.status(403).json({
    //         msg: "User is not authorized"
    //     })
    //     return;
    // }

    // if(kidneyId < 1 || kidneyId > 2){
    //     resp.status(400).json({
    //         msg : "Bad Input"
    //     })
    //     return;
    // }

    resp.status(200).json({
        msg: "Your health is great!"
    })
})

app.listen(3000)