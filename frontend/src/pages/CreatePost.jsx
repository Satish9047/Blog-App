import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle]=useState("");
  const [summary, setSummary]=useState("");
  const [blog, setBlog]=useState("");

  const handleCreatePost = async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/createBlogPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          summary,
          blog
        })
      });

      if(response.status == 200){
        const data = await response.json();
        console.log(data);
      }
      
    } catch (error) {
      console.error(error);
    }
    
  }
  return (
    <div>
      <form method="post" encType="multipart/form-data" onSubmit={handleCreatePost} >
        <div>Create New Post</div>
        <input type="text" placeholder="Title" value={title} onChange={(ev)=>{setTitle(ev.target.value)}}/>
        <input type="text" placeholder="Summary" value={summary} onChange={(ev)=>setSummary(ev.target.value)}/>
        <ReactQuill theme="snow" value={blog} onChange={(value)=>setBlog(value)}/>;
        <button type="submit">Create</button>
      </form>
    </div>
  )
}
export default CreatePost