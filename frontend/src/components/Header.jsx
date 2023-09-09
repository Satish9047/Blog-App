import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";



const Header = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const verifyUser = async () => {

      if(!localStorage.getItem("jwtToken")){
        console.log("Be our guest");
        return setUser("");
      }

      const response = await fetch("http://localhost:3000/profile", {
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });

      if (response.status === 200) {
        const userData = await response.json();
        console.log(userData.username);
        setUser(userData.username);
      } else {
        console.log("bad request from you")
        setUser("");
      }
    };

    verifyUser();
  }, []);

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      {user ? (
        <nav>
          <Link to="/createPost">Create New Post</Link>
        </nav>
      ) : (
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      )}
    </header>
  );
};
export default Header;
