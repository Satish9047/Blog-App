const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
    },
    blog: {
        type: String,
        required: true
    }
},{
    timestamps: true,
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);
module.exports = BlogPost;