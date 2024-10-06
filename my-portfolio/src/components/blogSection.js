import React from "react";
import { Link } from "react-router-dom";
import blogs from "../blogs/blogList";

const BlogsList = () => {
  return (
    <section>
      <div>
        <h2>
          From My Thoughts
        </h2>
        <p>
          Read my thoughts, as and when they come...
        </p>

        <div>
          {blogs.map((blog) => (
            <div key={blog.slug}>
              <img
                src={blog.cover_image}
                alt={blog.title} />

              <div>
                <div>{blog.date} &#124; {blog.category}</div>
                <Link>
                  <h3>{blog.title}</h3>
                </Link>
                <p>{blog.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsList;
