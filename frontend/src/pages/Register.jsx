import {useState} from "react";

const Register = () => {

  const [email, setEmail]=useState("");
  const [password, setpassword]=useState("");

  const handlerRegister = async(event)=>{
    event.preventDefault();
    const res = await fetch("http://localhost:3000/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      }),
    });

    const respond = await res.json()
      
    if(respond.status == 200){
      console.log(respond);
    }
  }


  return (
    <form action="" className="register" onSubmit={handlerRegister}>
      <h1>Register</h1>
      <input type="text" placeholder="email" value={email} onChange={event=> setEmail(event.target.value)}/>
      <input type="password" placeholder="password" value={password} onChange={event=> setpassword(event.target.value)}/>
      <button type="submit">Register</button>
    </form>
  )
}
export default Register