import React from "react";
import { Link } from "react-router-dom";
import blogs from "../blogs/blogList";

const BlogsList = () => {
  return (
    <section className="bg-white dark:bg-neutral-800 p-6 sm:p-8 lg:p-12 mt-10 mb-10 lg:mb-20 lg:mt-20 rounded-lg transition-colors duration-500">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
          From My Thoughts
        </h2>
        <p className="text-base sm:text-lg mb-8 sm:mb-12 text-center">
          Read my thoughts, as and when they come...
        </p>

        <div className="grid gap-10 lg:gap-12">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="flex flex-col lg:flex-row items-center lg:space-x-6 space-y-4 lg:space-y-0">
              <img
                src={blog.cover_image}
                alt={blog.title}
                className="lg:w-40 h-auto lg:h-40 aspect-w-1 aspect-h-1 object-cover rounded-lg" />

              <div>
                <div className="text-sm lg:text-left text-gray-500 dark:text-gray-300 transition-colors duration-500">{blog.date} &#124; {blog.category}</div>
                <Link to={`/blog/${blog.slug}`}>
                  <h3 className="text-left text-lg sm:text-xl font-semibold dark:text-white hover:text-blue-700">{blog.title}</h3>
                </Link>
                <p className="mt-1 sm:mt-2 text-gray-600 dark:text-gray-300 transition-colors duration-500 text-sm">{blog.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsList;
