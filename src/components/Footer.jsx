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
            <Link>Universities</Link>
            <Link>Mentors</Link>
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
