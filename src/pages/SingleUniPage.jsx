import "../styles/singleunipage.css";
import { useEffect, useState } from "react";
import MentorCard from "../components/MentorCard";
import CourseCard from "../components/CourseCard";
import { useParams } from "react-router-dom";
import toURL from "../sanityFetch";

const UniInfo = ({ details }) => {
  return (
    <div className="uniinfo-container">
      <div className="about-section">
        <h1>About</h1>
        <p>{details}</p>
      </div>
    </div>
  );
};

const SingleUniPage = () => {
  const [section, setSection] = useState("info");
  const { id } = useParams();
  const [university, setUniversity] = useState(null);

  useEffect(() => {
    console.log(id);
    fetch(
      toURL(
        `*[_type == "universities" && _id == "${id}" ]{...,"photoURL": photo.asset->url}`
      )
    )
      .then((res) => res.json())
      .then(({ result }) => {
        setUniversity(result[0]);
      });
  }, []);

  return (
    <div className="singleunipage-container">
      <div className="banner">
        <img src={university?.photoURL} alt="university image" />
        <div className="banner-info">
          <p className="uni-name">{university?.name}</p>
          <p className="location">Jaipur, Rajasthan</p>
          <p className="ranking">{university?.ranking}</p>
        </div>
      </div>

      <div className="navigators">
        <div
          style={
            section == "info" ? { backgroundColor: "rgb(213, 194, 231)" } : {}
          }
          onClick={() => setSection("info")}
        >
          Info
        </div>
        <div
          style={
            section == "courses"
              ? { backgroundColor: "rgb(213, 194, 231)" }
              : {}
          }
          onClick={() => setSection("courses")}
        >
          Courses
        </div>
        <div
          style={
            section == "mentors"
              ? { backgroundColor: "rgb(213, 194, 231)" }
              : {}
          }
          onClick={() => setSection("mentors")}
        >
          Mentors
        </div>
      </div>

      <div className="subpage">
        {section == "info" && <UniInfo details={university?.details} />}

        {section == "courses" && (
          <>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </>
        )}

        {section == "mentors" && (
          <>
            <MentorCard />
            <MentorCard />
            <MentorCard />
            <MentorCard />
            <MentorCard />
            <MentorCard />
          </>
        )}
      </div>
    </div>
  );
};

export default SingleUniPage;
