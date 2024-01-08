const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const jwt = require("jsonwebtoken")
const router = Router();
const jwtSecret = "123456"

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const resp = await Admin.findOne({
        username: username
    })

    if(resp == null){
        Admin.create({
            username: username,
            password: password,
            courses: []
        })
        res.status(201).json({
            message: 'Admin created successfully'
        })
    }else{
        res.status(400).json({
            message: "Admin already exists"
        })
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const admin = await Admin.findOne({
        username: username,
        password: password
    })

    if(admin == null){
        res.status(404).json({
            message: "Admin not found! Please sign-up"
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const course = req.body;
    const username = req.body.username;

    const resp = await Course.findOne({
        title: course.title
    })

    if(resp == null){

        const newDocument = await Course.create({
            title: course.title,
            description: course.description,
            price: course.price,
            imageLink: course.imageLink
        })
        
        const adminDoc = await Admin.findOne({
            username: username
        })
        adminDoc.courses.push(newDocument._id);
        await adminDoc.save();

        res.status(201).json({
            message: 'Course created successfully',
            courseId: newDocument._id 
        })
    }else{

        resp.description = course.description;
        resp.price = course.price;
        resp.imageLink = course.imageLink;

        await resp.save();

        res.status(201).json({
            message: 'Course updated successfully',
            courseId: resp._id 
        })
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const username = req.body.username

    const adminDoc = await Admin.findOne({
        username: username
    })
    const courseIDs = adminDoc.courses;

    const courses = await Course.find({
        _id : {
            $in: courseIDs
        }
    })

    res.status(200).json({
        courses: courses
    })
});

module.exports = router;