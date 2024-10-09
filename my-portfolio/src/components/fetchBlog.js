import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import fm from "front-matter";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    // dynamically fetch markdown files based on key/value pairs of slug
    import(`../blogs/${slug}.md`)
      .then((file) => fetch(file.default))
      .then((response) => response.text())
      .then((text) => {
        // separate metadata and content
        const parsed = fm(text);
        setContent(parsed.body);
        setMetadata(parsed.attributes);
      })
      .catch((error) => console.error(error));
  }, [slug]);

  return (
    <div className="w-full px-8 py-20 lg:px-80 mt-10 lg:ml-0 lg:mr-0 dark:bg-neutral-900 dark:text-white transition-colors duration-500">
      {metadata && (
        <>
          <Helmet>
            <title>{metadata.title}</title>
          </Helmet>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h1 className="text-3xl font-bold mb-4">{metadata.title}</h1>
            <p className="text-sm text-gray-500 mb-4">
              {metadata.date} &#124; {metadata.category}
            </p>
            {metadata.author && (
              <div className="flex items-center mb-6">
                {metadata.author.image && (
                  <img
                  src={metadata.author.image}
                  alt={metadata.author.name}
                  className="w-10 h-10 rounded-2xl" />
                )}
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-gray-300">{metadata.author.name}</p>
                  </div>
              </div>
            )}
            {metadata.cover_image && (
              <div className="mb-6 lg:mb-10">
                <img
                  src={metadata.cover_image}
                  alt={metadata.title}
                  className="mx-auto rounded-lg h-auto lg:w-auto w-3/4 lg:w-3/4 max-h-[500px] object-cover shadow-lg" />
              </div>
            )}
            <ReactMarkdown className="prose dark:prose-invert pt-10 lg:pt-20">{content}</ReactMarkdown>
          </motion.div>
        </>
      )}
    </div>
  )
};

export default BlogPost;
