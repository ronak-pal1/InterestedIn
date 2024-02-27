import { useEffect, useState } from "react";
import MentorCard from "../components/MentorCard";
import "../styles/mentorspage.css";
import toURL from "../sanityFetch";

const MentorsPage = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch(
      toURL(
        `*[_type == "mentors"]{name,skills,_id,university,"photoURL": profile.asset->url}`
      )
    )
      .then((res) => res.json())
      .then(({ result }) => {
        setMentors(result);
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
