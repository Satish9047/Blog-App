const BlogPost = require("../models/blogPost.model");

const createBlogPostController = async (req, res)=>{
    const {title, summary, blog}=req.body;
    console.log(req.body);
    try {
        const createBlog = await BlogPost.create({
            title,
            summary,
            blog,
        })
        return res.status(200).json({success: "Blog post is saved in database"});
    } catch (error) {
        console.error("Error while added post to the mongoDB", error)
    }

    
}

module.exports= {
    createBlogPostController
}