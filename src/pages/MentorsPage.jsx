import { useEffect, useState } from "react";
import MentorCard from "../components/MentorCard";
import "../styles/mentorspage.css";
import toURL from "../sanityFetch";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetch(
          toURL(
            `*[_type == "mentors"]{name,skills,_id,university,"photoURL": profile.asset->url}`
          )
        )
          .then((res) => res.json())
          .then(({ result }) => {
            setMentors(result);
          });
      } else {
        console.log("user is not signed in");
        navigate("/signup");
      }
    });
  }, []);
  return (
    <div className="mentorspage-container">
      <div className="info">
        <h1>Mentors</h1>
      </div>

      <div className="cards">
        {mentors?.map((mentor) => (
          <MentorCard
            key={mentor._id}
            id={mentor._id}
            imageURL={mentor.photoURL}
            name={mentor.name}
            uni={mentor.university}
            skills={mentor.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default MentorsPage;
