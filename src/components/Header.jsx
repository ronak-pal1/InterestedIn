import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const Header = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

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
    <header className="container">
      <div className="left-container">
        <Link to="/">InterestedIn</Link>
      </div>

      <div className="middle-container">
        <Link to="/">Home</Link>
        <Link to="/universities">Universities</Link>
        <Link to="/mentors">Mentors</Link>
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
  );
};

export default Header;
