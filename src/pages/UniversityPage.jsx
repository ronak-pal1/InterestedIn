import "../styles/unipage.css";
import UniCard from "../components/UniCard";
import { useEffect, useState } from "react";
import toURL from "../sanityFetch";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const UniversityPage = () => {
  const [universities, setUniversities] = useState([]);
  const navigate = useNavigate();

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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchData();
      } else {
        console.log("User is not signed in");
        navigate("/signup");
      }
    });
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
