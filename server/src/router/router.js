const express = require("express");
const router = express.Router();
const {jwtVerify} =require("../middlewares/jwtAuth.middleware");
const {loginController, registerController}=require("../controllers/auth.controller")
const {profileController} = require("../controllers/profile.controller");


router.post("/register", registerController)

router.post("/login", loginController)

router.get("/profile", jwtVerify, profileController)


module.exports = router