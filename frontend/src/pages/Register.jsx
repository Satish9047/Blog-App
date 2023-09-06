import {useState} from "react";
import {useNavigate} from "react-router-dom"

const Register = () => {
  const navigate = useNavigate();
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

    if(res.status == 200){
      const resData = await res.json()
      console.log(resData);
      navigate("/login")
    }else{
      const resData = await res.json();
      console.log(resData.error)
      alert(resData.error)
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