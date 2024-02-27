import "../styles/coursecard.css";
import HERO_SECTION_BANNER from "../assets/hero-section-banner.jpg";

const CourseCard = () => {
  return (
    <div className="coursecard-container">
      {/* <img src={HERO_SECTION_BANNER} alt="university banner" /> */}
      <div>
        <p className="course">Bachalore of technology</p>
        <p className="fees">Fees: 75k-80k</p>
        <button>Details</button>
      </div>
    </div>
  );
};

export default CourseCard;
