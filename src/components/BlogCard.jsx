import { useNavigate } from "react-router-dom";
import "../styles/blogcard.css";

const BlogCard = ({ id, bannerURL, title }) => {
  const navigate = useNavigate();

  return (
    <div
      className="blogcard-container"
      onClick={() => navigate(`/blogs/${id}`)}
    >
      <div className="banner">
        <img src={bannerURL} alt="blog banner" />
      </div>
      <div className="info">
        <p className="title">{title}</p>
      </div>
    </div>
  );
};

export default BlogCard;
