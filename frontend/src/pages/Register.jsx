import {useState} from "react";

const Register = () => {

  const [username, setUsername]=useState("");
  const [password, setpassword]=useState("");

  const handlerRegister = async(event)=>{
    event.preventDefault();
    const res = await fetch("http://localhost:3000", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    

    
  }

  return (
    <form action="" className="register" onSubmit={handlerRegister}>
      <h1>Register</h1>
      <input type="text" placeholder="username" value={username} onChange={event=> setUsername(event.target.value)}/>
      <input type="password" placeholder="password" value={password} onChange={event=> setpassword(event.target.value)}/>
      <button type="submit">Register</button>
    </form>
  )
}
export default Register