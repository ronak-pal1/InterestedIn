import "../styles/signup.css";
import SIGNUPIMAGE from "../assets/signupimage.png";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="signup-container">
      <div className="left">
        <p>Create your account</p>
        <div className="withgoogle">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path
                fill="#f5bc00"
                d="M43.6,20.1H42V20H24v8h11.3c-1.6,4.7-6.1,8-11.3,8c-6.6,0-12-5.4-12-12s5.4-12,12-12c3.1,0,5.8,1.2,8,3l5.7-5.7	C34,6.1,29.3,4,24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20C44,22.7,43.9,21.4,43.6,20.1z"
              ></path>
              <path
                fill="#6c19ff"
                d="M43.6,20.1L43.6,20.1L42,20H24v8h11.3c-0.8,2.2-2.2,4.2-4.1,5.6c0,0,0,0,0,0l6.2,5.2C37,39.2,44,34,44,24	C44,22.7,43.9,21.4,43.6,20.1z"
              ></path>
              <path
                fill="#3ddab4"
                d="M24,44c5.2,0,9.9-2,13.4-5.2l-6.2-5.2c-2,1.5-4.5,2.4-7.2,2.4c-5.2,0-9.6-3.3-11.3-7.9l-6.5,5	C9.5,39.6,16.2,44,24,44z"
              ></path>
              <path
                fill="#f55376"
                d="M6.3,14.7l6.6,4.8C14.7,15.1,19,12,24,12c3.1,0,5.8,1.2,8,3l5.7-5.7C34,6.1,29.3,4,24,4	C16.3,4,9.7,8.3,6.3,14.7z"
              ></path>
              <path
                fill="#2100c4"
                d="M26.6,35.7l6.8,6c1.5-0.8,2.9-1.8,4.1-2.9l-6.2-5.2C29.9,34.6,28.3,35.3,26.6,35.7z"
              ></path>
              <path
                fill="#eb0000"
                d="M9.2,10.6c-1.1,1.2-2.1,2.6-2.9,4.1l3.9,2.9l2.6,1.9c0.6-1.6,1.6-3,2.8-4.1L9.2,10.6z"
              ></path>
            </svg>
            <p>Continue with google </p>
          </div>
          <p>or</p>
        </div>

        <div className="signup-form">
          <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button>Sign Up</button>
          </form>
        </div>

        <div className="other-options">
          <p>
            Already have a account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>

      <div className="right">
        <img src={SIGNUPIMAGE} alt="signup image" />
      </div>
    </div>
  );
};

export default SignUpPage;
