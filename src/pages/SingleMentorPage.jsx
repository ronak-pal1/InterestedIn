import "../styles/singlementorpage.css";
import PROFILE from "../assets/profile.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toURL from "../sanityFetch";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const SingleMentorPage = () => {
  const { id } = useParams();
  const [mentorDetails, setMentorDetails] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      toURL(
        `*[_type=="mentors" && _id=="${id}"]{..., "photoURL":profile.asset->url}`
      )
    )
      .then((response) => response.json())
      .then(({ result }) => {
        setMentorDetails(result[0]);
      });

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signup");
      }
    });
  }, []);

  return (
    <div className="mentor-profile-container">
      <div className="profile-banner">
        <div className="profile-image">
          <img src={mentorDetails?.photoURL} alt="mentor profile" />
        </div>
      </div>

      <div className="profile-info">
        <p className="name">{mentorDetails?.name}</p>
        <div className="academic">
          <p>University: {mentorDetails?.university}</p>
          <p>Branch: {mentorDetails?.branch}</p>
          <p>Year: {mentorDetails?.year}</p>
        </div>
        <button className="connectButton">connect</button>
        <div className="charge">Charge: {mentorDetails?.charge}/-</div>
        <p className="details">{mentorDetails?.details}</p>

        <div className="skills">
          <p>Skills</p>
          <div>
            {mentorDetails?.skills.map((skill) => (
              <div>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMentorPage;
