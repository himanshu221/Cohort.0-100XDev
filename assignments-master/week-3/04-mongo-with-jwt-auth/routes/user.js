const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken")
const jwtSecret = "123456"
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

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username: username,
        password: password
    })

    if(user == null){
        res.status(404).json({
            message: "User not found! Please sign-up"
        })
    }else{
        const token = jwt.sign({
            username: username
        }, jwtSecret)

        res.status(200).json({
            token,
        })
    }
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const resp = await Course.find({})

    res.status(200).json({
        courses : resp
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.body.username;
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
    const username = req.body.username;

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