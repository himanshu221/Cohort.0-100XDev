const { User } = require("../db")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const resp = await User.findOne({
        username: username,
        password: password
    })

    if(resp == null){
        res.status(404).json({
            message: "User not found!"
        })
    }else{
        console.log("User authenticated")
        next();
    }
}

module.exports = userMiddleware;