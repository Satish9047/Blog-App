const User = require("../models/user.model");
const bcrypt = require("bcrypt");
saltRounds = 8;

const registerController = async (req, res)=>{
    console.log(req.body);
    const {email, password}= req.body;

    const userExist = await User.findOne({email: email});
    if(userExist){
        console.warn("user already existed");
        return res.status(400).json({error: "user already existed"});
    }

    const hash = await bcrypt.hash(password, saltRounds)
        .then((hash)=>{
            console.log("password hashed",hash);
            return hash
        })
        .catch((error)=>{
            throw error
        })


    const newUser = await User.create({
        email,
        password: hash
    })
    newUser.save();
    console.log("user saved in mongoDB");
    return res.status(200).json({success: "register successfull"})
}


const loginController = async (req, res)=>{
    console.log(req.body);

    const {email, password}=req.body;

    const userExist = await User.findOne({email: email});
    if(!userEmail){
        console.log("user not found");
        return res.status(400).json({error: "user doen't exist" })
    }

    

    return res.status(200).json({success: "register successfull"})
}


module.exports = {
    registerController,
    loginController
}