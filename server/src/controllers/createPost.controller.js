
const createBlogPostController = (req, res)=>{
    console.log(req.file, req.body);
    return res.status(200).json({success: "this is createBlogPost Controller"});
}

module.exports= {
    createBlogPostController
}