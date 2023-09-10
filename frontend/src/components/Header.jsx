import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("jwtToken")) {
      console.log("Be our guest");
      return setUser(null);
    }

    const verifyUser = async () => {
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
        console.log(user);
      } else {
        console.log("bad request from you");
        setUser(null);
      }
    };

    verifyUser();
  }, [user]);

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setUser(null);
    navigate("/");
  };

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      {user ? (
        <nav>
          <Link to="/createPost">Create New Post</Link>
          <a onClick={logout}>Logout</a>
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
