import BlogsList from "../components/blogSection";

const Blog = () => (
  <div className="text-center md:p-8 p-12 dark:bg-neutral-900 dark:text-white transition-colors duration-500">
    <h1 className="text-4xl font-bold pt-40">
      Blog
    </h1>

    <p className="mt-4">
      Sharing my thoughts and articles on dev
    </p>

    <BlogsList />
  </div>
);

export default Blog;
