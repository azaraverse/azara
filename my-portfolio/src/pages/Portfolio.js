import { Link } from "react-router-dom";

const projects = [
  { id: 1, title: 'BMP Studio Web App', description: 'A dynamic web app for BMP Studio', url: 'https://github.com/azaraverse/bmp_studio.git' },
  { id: 2, title: 'Azara', description: 'My personal portfolio website', url: 'https://muqitazara.tech/' },
  { id: 3, title: 'skysync', description: 'A dynamic web app for displaying weather data', url: 'https://skysync-steel.vercel.app' },
  { id: 4, title: 'Files Manager', description: 'A files manager built with NodeJs, existing only on the CLI.', url: 'https://github.com/azaraverse/alx-files_manager.git' },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen mx-auto mt-8 px-10 dark:bg-neutral-900 transition-colors duration-200">
      <h1 className="text-4xl font-bold text-center mt-10 pt-20 dark:text-white">
        My Portfolio
      </h1>
      <div className="text-center text-sm my-4">
        <p className="text-red-500">This page is in WIP mode - Work In Progress</p>
        <p className="dark:text-white">
          Read my latest blog <Link to="https://blog.muqitazara.tech">
            <span className="text-blue-700 underline">here</span>
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 shadow-md rounded-lg cursor-pointer">
            <h2 className="text-2xl font-bold hover:text-blue-700 transition-colors duration-150">
              <a href={project.url} target="_blank" rel="noreferrer noopener">{project.title}</a>
            </h2>
            <p>
              <a href={project.url} target="_blank" rel="noreferrer noopener">{project.description}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
