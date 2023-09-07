import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Post from "../components/post"

const Homepage = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const verifyToken = async()=>{
      try {
        const response = await fetch("http://localhost:3000/profile", {
          method: "GET",
          headers: `Bearer ${localStorage.getItem("jwtToken")}`,
        });

        if(response.status == 200){
          console.log("Authorized user");
        }else{
          console.log("Unauthorized user");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error while verifying token:", error)
      }
    }
    verifyToken();  
  }, [])
  return (
    <>
       <Post />
       <Post />
       <Post />
    </>
  )
}
export default Homepage