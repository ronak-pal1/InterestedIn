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
  const [mentors, setMentors] = useState([]);
  const { id } = useParams();
  const [university, setUniversity] = useState(null);

  useEffect(() => {
    fetch(
      toURL(
        `*[_type == "universities" && _id == "${id}" ]{details,location,name,ranking, _id, courses,"photoURL": photo.asset->url}`
      )
    )
      .then((res) => res.json())
      .then(({ result }) => {
        console.log(result[0]);
        setUniversity(result[0]);
      });

    fetch(
      toURL(
        `*[_type == "mentors" ]{name,skills,university, _id, "photoURL": profile.asset->url}[0...6]`
      )
    )
      .then((res) => res.json())
      .then(({ result }) => {
        setMentors(result);
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
            {university?.courses?.map((course) => (
              <CourseCard
                key={course._key}
                courseName={course.name}
                fees={course.fees}
              />
            ))}
          </>
        )}

        {section == "mentors" && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default SingleUniPage;
