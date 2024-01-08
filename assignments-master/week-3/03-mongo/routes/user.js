const { Router, response } = require("express");
const {User, Course} = require("../db")
const router = Router();
const userMiddleware = require("../middleware/user");
const mongoose = require("mongoose")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const resp = await User.findOne({
        username: username
    })

    if(resp == null){
        User.create({
            username: username,
            password: password,
            courses: []
        })
        res.status(201).json({
            message: 'User created successfully'
        })
    }else{
        res.status(400).json({
            message: "User already exists"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const resp = await Course.find({})

    res.status(200).json({
        courses : resp
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res, next) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    let course;
    try{
        course = await Course.findOne({
            _id: courseId
        })
        const user = await User.findOne({
            username: username
        })
        
        user.courses.push(course._id)
        await user.save();
        
        res.status(200).json({
            message: "Course bought successfully"
        })
    }catch(e){
        res.status(400).json({
            message: "Course not found"
        })
    }
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;

    const user = await User.findOne({
        username: username
    })

    const courses = await Course.find({
        _id : {
            $in: user.courses
        }
    })

    res.status(200).json({
        courses: courses
    })
});

module.exports = router