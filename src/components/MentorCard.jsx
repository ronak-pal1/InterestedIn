import "../styles/mentorCard.css";

const skillsIntoText = (skills) => {
  let text = "";

  skills.forEach((skill) => {
    text += skill + " ";
  });

  return text;
};
const MentorCard = ({ imageURL, name, uni, skills, id }) => {
  return (
    <div className="mentor-card">
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
