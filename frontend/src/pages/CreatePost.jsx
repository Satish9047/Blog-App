import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  return (
    <div>
      <div>Create New Post</div>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Summary"/>
      <input type="file"/>
      <ReactQuill theme="snow"/>;
      
    </div>
  )
}
export default CreatePost