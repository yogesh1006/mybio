import React from "react";
import "./blog-card.css";

 const BlogCard = ({ item }) => {
  return (
    <div className="blog">
      <h3 className="blog-title">{item.title}</h3>
      <small>
        <time>{item.date}</time> • {item.duration}
      </small>
      <p className="blog-description">{item.shortDescription}</p>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href={item.link}
          className="blog-link"
        >
          Read
        </a>
      </div>
    </div>
  );
};

export default BlogCard