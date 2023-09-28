import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle]=useState("");
  const [summary, setSummary]=useState("");
  const [coverImg, setCoverImg] = useState("");
  const [blog, setBlog]=useState("");
  
  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("jwtToken")){
      navigate("/login");
    }
  }, []);

  const handleCreatePost = async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/createBlogPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("jwtToken")}`
        },
        body: JSON.stringify({
          title,
          summary,
          coverImg,
          blog
        })
      });

      if(response.status == 200){
        const data = await response.json();
        console.log(data);
      } else{
        const data = await response.json();
        console.error(data);
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
        <input type="file" value={coverImg} onChange={(ev)=>setCoverImg(ev.target.files[0])}/>
        <ReactQuill theme="snow" value={blog} onChange={(value)=>setBlog(value)}/>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}
export default CreatePost