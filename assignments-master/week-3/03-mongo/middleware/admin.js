const { Admin } = require("../db")
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const resp = await Admin.findOne({
        username: username,
        password: password
    })

    if(resp == null){
        res.status(404).json({
            message: "Admin not found!"
        })
    }else{
        console.log("Admin authenticated")
        next();
    }
}

module.exports = adminMiddleware;