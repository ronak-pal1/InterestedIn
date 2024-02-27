import "../styles/coursecard.css";
import HERO_SECTION_BANNER from "../assets/hero-section-banner.jpg";

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
