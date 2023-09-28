const express = require("express")
const router = express.Router()
const multer = require("multer");
const upload = multer({ dest: './public/data/uploads/' })


const {jwtVerify} =require("../middlewares/jwtAuth.middleware")
const {loginController, registerController}=require("../controllers/auth.controller")
const {profileController} = require("../controllers/profile.controller")
const {createBlogPostController} = require("../controllers/createPost.controller")


router.post("/register", registerController);

router.post("/login", loginController);

router.get("/profile", jwtVerify, profileController);

router.post("/createBlogPost", jwtVerify, upload.single('avatar'), createBlogPostController)

module.exports = router