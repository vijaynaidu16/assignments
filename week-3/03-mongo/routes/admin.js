const { Router, json } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const usernname = req.body.usernname;
  const password = req.body.password;

  // checks if the same username exists
  await Admin.create({
    usernname: usernname,
    password: password,
  });
  res.json({
    message: "Admin created succesfully",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res,
    json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  res.json({
    msg: "admin/courses",
  });
});

module.exports = router;
