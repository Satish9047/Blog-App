const profileController = (req, res)=>{
    res.status(200).json({success: "This is profile page"})
}

module.exports={
    profileController
};