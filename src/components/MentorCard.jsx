import { useNavigate } from "react-router-dom";
import "../styles/mentorCard.css";

const skillsIntoText = (skills) => {
  let text = "";

  skills.forEach((skill) => {
    text += skill + " ";
  });

  return text;
};
const MentorCard = ({ imageURL, name, uni, skills, id }) => {
  const navigate = useNavigate();

  return (
    <div className="mentor-card" onClick={() => navigate(`/mentors/${id}`)}>
      <div className="profile">
        <img src={imageURL} alt="mentor image" />
      </div>
      <div className="details">
        <p className="name">{name}</p>
        <p className="university">{uni}</p>
        <p className="skills">{skillsIntoText(skills)}</p>
      </div>
    </div>
  );
};

export default MentorCard;
