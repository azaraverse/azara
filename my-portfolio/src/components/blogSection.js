import React from "react";
import { Link } from "react-router-dom";
import blogs from "./blogList";
import { motion } from "framer-motion";

const BlogsList = () => {
  // Animation variants for framer-motion
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.8, // effects delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      },
    },
  };

  return (
    <section className="bg-white dark:bg-neutral-800 p-6 sm:p-8 lg:p-12 mt-10 mb-10 lg:mb-20 lg:mt-20 rounded-lg">
      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
          From My Thoughts
        </h2>
        <p className="text-base sm:text-lg mb-8 sm:mb-12 text-center">
          Sharing my thoughts and lessons on <span className="text-blue-700 dark:text-blue-400 font-mono">Dev</span>
        </p>

        <motion.div
          className="grid grid-cols-2 gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.slug}
              variants={itemVariants}
              className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-8">
              <img
                src={blog.cover_image}
                alt={blog.title}
                className="lg:w-40 h-auto lg:h-40 md:aspect-w-1 md:aspect-h-1 object-cover rounded-lg" />

              <div>
                <div className="text-sm text-left text-gray-500 dark:text-gray-300 transition-colors duration-500">{blog.date} &#124; {blog.category}</div>
                <Link to={`/blog/${blog.slug}`}>
                  <h3 className="text-left text-lg sm:text-xl font-semibold dark:text-white hover:text-blue-700">{blog.title}</h3>
                </Link>
                <p className="text-left mt-1 sm:mt-2 text-gray-600 dark:text-gray-300 transition-colors duration-500 text-sm">{blog.author.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogsList;
