import "../styles/singleblogpage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toURL from "../sanityFetch";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { PortableText } from "@portabletext/react";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [contents, setContents] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      toURL(
        `*[_type == "blogs" && _id=="${id}"]{_id,title,subtitle,"bannerURL": banner.asset->url,author,blog,_createdAt}`
      )
    )
      .then((response) => response.json())
      .then(({ result }) => {
        setContents(result[0]);
      });

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signup");
      }
    });
  }, []);

  return (
    <div className="blog-container">
      <div className="banner">
        <img src={contents?.bannerURL} alt="blog banner" />
      </div>
      <div className="info">
        <p className="title">{contents?.title}</p>
        <div className="about">
          <p className="author">Written by {contents?.author}</p>
          <p className="date">Published on: {contents?._createdAt}</p>
        </div>
        <p className="subtitle">{contents?.subtitle}</p>
      </div>
      <div className="blog-content">
        <PortableText value={contents?.blog} />
      </div>
    </div>
  );
};

export default SingleBlogPage;
