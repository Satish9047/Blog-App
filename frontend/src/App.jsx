import "./App.css";
import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element ={<Homepage />}/>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/register"} element={<Register />}/>
      </Route>
    </Routes>
  ) 
}

export default App
