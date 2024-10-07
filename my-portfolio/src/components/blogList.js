import firstBlogImg from "../assets/images/pexels-first-blog.jpg";
import reactBlogImg from "../assets/images/pexels-react.jpg";
import seoBlogImg from "../assets/images/pexels-seo.jpg";

const blogs = [
  {
    slug: "first-blog-on-dev",
    title: "First Ever Blog",
    date: "2024-10-07",
    category: "Software Engineering",
    author: {
        name: "Yushahu Yussif Azara",
        image: firstBlogImg
    },
    cover_image: firstBlogImg
  },
  {
    slug: "react app creation",
    title: "Building my First React App",
    date: "2024-10-06",
    category: "React",
    author: {
        name: "Yushahu Yussif Azara",
        image: reactBlogImg
    },
    cover_image: reactBlogImg
  },
  {
    slug: "seo-optimisation",
    title: "How to use SEO to drive traffic",
    date: "2024-10-05",
    category: "SEO",
    author: {
        name: "Yushahu Yussif Azara",
        image: seoBlogImg
    },
    cover_image: seoBlogImg
  },
]

export default blogs;
