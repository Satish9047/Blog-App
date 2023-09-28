const jwt = require("jsonwebtoken");
const secret = `${process.env.JWT_SECRET}`
const profileController = (req, res)=>{

    const token = req.headers.authorization

    const jwtToken = token.split(" ")[1];
    
    const verifyToken = jwt.decode(jwtToken, secret);
    const userEmail = verifyToken.email;
    console.log(userEmail);

    console.log("jwtToken validated successfully")
    res.status(200).json({success: "This is profile page", username: userEmail});
}

module.exports={
    profileController
};