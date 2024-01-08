const jwtSecret = "123456"
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(" ")[0];
    try{
        jwt.verify(token, jwtSecret)
        const decodeToken = jwt.decode(token)
        req.body.username = decodeToken.username
        next();
    }catch(e){
        res.status(401).json({
            message: "Unauthorized Access. Token invalid"
        })
    }
}

module.exports = userMiddleware;