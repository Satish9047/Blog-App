const User = require("../models/user.model")

const registerController = async (req, res)=>{
    console.log(req.body);
    const {username, password}= req.body;

    const newUser = await User.create({
        username,
        password
    })


    return res.status(200).json({success: "register successfull"})
}


const loginController = (req, res)=>{
    console.log(req.body);
    return res.status(200).json({success: "register successfull"})
}


module.exports = {
    registerController,
    loginController
}