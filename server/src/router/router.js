const express = require("express");
const router = express.Router();
const {loginController, registerController}=require("../controllers/auth.controller")

router.get("/", (req, res)=>{
    console.log(req.headers);
    return res.status(200).json({message: "Hello this is blog server"})
})

router.post("/register", registerController)

router.post("/login", loginController)

module.exports = router