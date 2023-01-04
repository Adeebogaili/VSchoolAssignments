import React from "react";
import BlogPost from "./BlogPost"
import data from "../data";

export default function BlogList() {

    const blogs = data.map(blog => {
        return (
          <BlogPost
            blog = {blog}
          />
        )
      })

    return (
        <div className="main-wrapper">
            <div className="content-wrapper">
                {blogs}
                <a className="older-posts" href="#">Older Posts<i class="fa-sharp fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
        )
}