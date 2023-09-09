
const profileController = (req, res)=>{
    console.log("jwtToken validated successfully")
    res.status(200).json({success: "This is profile page"})
}

module.exports={
    profileController
};