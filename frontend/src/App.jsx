import "./App.css";
import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<Homepage />}/>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/register"} element={<Register />}/>
        <Route path={"/profile"} element={<Profile />}/>
        <Route path={"/createPost"} element={<CreatePost />}/>
      </Route>
    </Routes>
  ) 
}

export default App
