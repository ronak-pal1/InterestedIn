import "../styles/coursecard.css";

const CourseCard = ({ courseName, fees, details }) => {
  return (
    <div className="coursecard-container">
      {/* <img src={HERO_SECTION_BANNER} alt="university banner" /> */}
      <div>
        <p className="course">{courseName}</p>
        <p className="fees">Fees: {fees}</p>
        <button>Details</button>
      </div>
    </div>
  );
};

export default CourseCard;
