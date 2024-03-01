import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/sidebar.css";

const Header = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const signout = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("succesfully sign out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });
  }, []);
  return (
    <>
      {/* Sidebar */}
      <div
        className="sidebar-container active"
        style={isSidebarOpen == true ? { left: "0%" } : { left: "-100%" }}
      >
        <div className="close">
          <svg
            onClick={() => setSidebarOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
          </svg>
        </div>
        <div className="contents">
          {!isSignedIn ? (
            <>
              <button onClick={() => navigate("/signin")}>Sign in</button>
              <button onClick={() => navigate("/signup")}>Sign up</button>
            </>
          ) : (
            <button onClick={signout}>Sign out</button>
          )}
        </div>
      </div>

      <header className="container">
        <div className="sidebar-button">
          <svg
            onClick={() => setSidebarOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </svg>
        </div>
        <div className="left-container">
          <Link to="/">InterestedIn</Link>
        </div>

        <div className="middle-container">
          <Link to="/">Home</Link>
          <Link to="/universities">Universities</Link>
          <Link to="/mentors">Mentors</Link>
          <Link to="/blogs">Blogs</Link>
        </div>

        <div className="right-container">
          {!isSignedIn ? (
            <>
              <button onClick={() => navigate("/signin")}>Sign in</button>
              <button onClick={() => navigate("/signup")}>Sign up</button>
            </>
          ) : (
            <button onClick={signout}>Sign out</button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
