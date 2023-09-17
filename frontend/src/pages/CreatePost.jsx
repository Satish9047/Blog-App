import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle]=useState("");
  const [summary, setSummary]=useState("")

  const handleCreatePost = (e)=>{
    e.preventDefault();
    
  }
  return (
    <div>
      <form onSubmit={handleCreatePost}>
        <div>Create New Post</div>
        <input type="text" placeholder="Title" value={title} onChange={(ev)=>{setTitle(ev.target.value)}}/>
        <input type="text" placeholder="Summary" value={summary} onChange={(ev)=>setSummary(ev.target.value)}/>
        <input type="file"/>
        <ReactQuill theme="snow"/>;
        <button type="submit">Create</button>
      </form>
    </div>
  )
}
export default CreatePost