/*
Problem statement: Create 3 endpoints signup and signin and users which give all users except the user who has called
*/

const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
   "mongodb+srv://admin:W5ExPE6wId3akFsg@himanshucluster.e2eiudg.mongodb.net/user_app"
);

const User = mongoose.model("users", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

app.post("/signup", async (req, resp) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    if(await User.findOne({
        username: username
    })){
        return resp.status(403).json({
            msg: "User already exist. Please signin"
        })
    }

    await User.create({
        name : name,
        username: username,
        password: password
    })

    resp.status(201).json({
        msg: "User signed up successfully"
    })
})

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!await User.findOne({
        username: username,
        password: password
    })) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db. Please sign-up first",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
    let all_users = await User.find({})
    res.json({
        "users": all_users.filter(ele => ele.username !== username).map(ele => {
            return {
                name: ele.name,
                username: ele.username
            }
        })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);