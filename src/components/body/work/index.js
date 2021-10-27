import React from "react";
import { BlogData } from "../../../data/blog";
import BlogCard from "./blog-card";
import "./blog.css";
import Separator from "../../common/seperator";
function Blog() {
  const data = BlogData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Blogs</label>
      <div className="work-list">
        {data.map((item,index) => {
          return <BlogCard item={item} key={index}/>;
        })}
      </div>
    </div>
  );
}

export default Blog;
