import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();
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
        <button onClick={() => navigate("/signin")}>Sign in</button>
        <button onClick={() => navigate("/signup")}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
