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
            <Link to={"/"}>Home</Link>
            <Link to={"universities"}>Universities</Link>
            <Link to={"/mentors"}>Mentors</Link>
            <Link to={"/blogs"}>Blogs</Link>
          </div>
          <div className="details">
            <p>
              Dr BS Tomar City, NH-11C, Highway, Jaipur Delhi, Chandwaji,
              Rajasthan 302131
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
