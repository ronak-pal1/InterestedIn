import { useNavigate } from "react-router-dom";
import "../styles/uniCard.css";

const UniCard = ({ imageURL, title, ranking, id }) => {
  const navigate = useNavigate();

  return (
    <div className="uni-card">
      <img src={imageURL} alt="university banner" />
      <div>
        <p className="title">{title}</p>
        <p className="ranking">{ranking}</p>
        <button onClick={() => navigate(`/universities/${id}`)}>Explore</button>
      </div>
    </div>
  );
};

export default UniCard;
