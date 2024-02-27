import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="left">
          <p>InterestedIn</p>
        </div>
        <div className="right">
          <div className="links">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Blogs</Link>
          </div>
          <div className="details">
            <p>Adress</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
