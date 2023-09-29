const multer = require("multer");
const path = require("path");
const BlogPost = require("../models/blogPost.model")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const createBlogPostController = async (req, res)=>{
    const {title, summary, blog}=req.body;
    const cover = req.file ? req.file.path : "";
    console.log(req.body);
    try {
        const createBlog = await BlogPost.create({
            title,
            summary,
            cover,
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