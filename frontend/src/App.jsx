import "./App.css";
import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<Homepage />}/>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/register"} element={<Register />}/>
        <Route path={"/profile"} element={<Profile />}/>
      </Route>
    </Routes>
  ) 
}

export default App
