import { useState} from "react";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const navigate = useNavigate();

  const handleLogin = async (e)=>{
    e.preventDefault();
    
    const res = await fetch("http://localhost:3000/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
      credentials: "include",
    })

    if(res.status ==200){
      const resData = await res.json()
      console.log(resData);
      navigate("/")
    }else{
      const resData = await res.json();
      console.log(resData.error);
      alert(resData.error)
    }
  }

  return (
    <form action="" className="login" onSubmit={handleLogin}>
      <h1>Login</h1>
      <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button type="submit">Login</button>
    </form>
  )
}
export default Login