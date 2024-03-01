import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import toURL from "../sanityFetch";
import "../styles/blogspage.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      toURL('*[_type == "blogs"]{"bannerURL": banner.asset->url,_id,title,}')
    )
      .then((response) => response.json())
      .then(({ result }) => {
        setBlogs(result);
      });

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signup");
      }
    });
  }, []);
  return (
    <div className="all-blogs-container">
      {blogs?.map((blog) => (
        <BlogCard
          key={blog._id}
          id={blog._id}
          bannerURL={blog.bannerURL}
          title={blog.title}
        />
      ))}
    </div>
  );
};

export default BlogsPage;
