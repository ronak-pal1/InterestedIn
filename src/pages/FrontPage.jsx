import "../styles/frontpage.css";
import HERO_SECTION_BANNER from "../assets/hero-section-banner.jpg";
import UniCard from "../components/UniCard";
import MentorCard from "../components/MentorCard";
import { useEffect, useState } from "react";
import toURL from "../sanityFetch";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
  const [universities, setUniversities] = useState([]);
  const [mentors, setMentors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      toURL(
        `*[_type == "universities"]{name,"photoURL": photo.asset->url,ranking,_id}[0...4]`
      )
    )
      .then((res) => res.json())
      .then(({ result }) => {
        setUniversities(result);
      });

    fetch(
      toURL(
        `*[_type == "mentors" ]{name,skills,university, _id, "photoURL": profile.asset->url}[0...3]`
      )
    )
      .then((res) => res.json())
      .then(({ result }) => {
        setMentors(result);
        console.log(result);
      });
  }, []);

  return (
    <div className="front-page-container">
      <div className="hero-section">
        <img src={HERO_SECTION_BANNER} alt="university banner" />
        <div className="hero-section-details">
          <h1>Discover your passion</h1>
          <p>
            Let's connect with university students and get mentored from them
          </p>
          <button onClick={() => navigate("/signup")}>Get Started</button>
        </div>
      </div>

      <div className="university-section">
        <p>Universities</p>
        <div>
          {universities?.map((university) => (
            <UniCard
              key={university._id}
              imageURL={university.photoURL}
              title={university.name}
              ranking={university.ranking}
              id={university._id}
            />
          ))}
        </div>

        <button onClick={() => navigate("/universities")}>View all</button>
      </div>

      <div className="mentors-section">
        <p>Mentors</p>
        <div>
          {mentors?.map((mentor) => (
            <MentorCard
              key={mentor._id}
              id={mentor._id}
              name={mentor.name}
              imageURL={mentor.photoURL}
              skills={mentor.skills}
              uni={mentor.university}
            />
          ))}
        </div>

        <button onClick={() => navigate("/mentors")}>View all</button>
      </div>
    </div>
  );
};

export default FrontPage;
