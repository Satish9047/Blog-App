

const registerController = (req, res)=>{
    console.log(req.body);
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