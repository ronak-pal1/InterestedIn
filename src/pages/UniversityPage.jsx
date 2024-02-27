import "../styles/unipage.css";
import UNI_IMAGE from "../assets/hero-section-banner.jpg";
import UniCard from "../components/UniCard";
import { useEffect, useState } from "react";
import toURL from "../sanityFetch";

const UniversityPage = () => {
  const [universities, setUniversities] = useState([]);

  const fetchData = () => {
    fetch(
      toURL(
        `*[_type == "universities"]{name,"photoURL": photo.asset->url,ranking,_id,}`
      )
    )
      .then((res) => res.json())
      .then(({ result }) => {
        console.log(result);
        setUniversities(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="unipage-container">
      <div className="info">
        <h1>Universities</h1>
      </div>
      <div className="cards">
        {universities?.map((university) => (
          <UniCard
            key={university._id}
            id={university._id}
            imageURL={university.photoURL}
            title={university.name}
            ranking={university.ranking}
          />
        ))}
      </div>
    </div>
  );
};

export default UniversityPage;
