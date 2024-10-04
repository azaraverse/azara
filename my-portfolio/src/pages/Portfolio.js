const projects = [
  { id: 1, title: 'BMP Studio Web App', description: 'A dynamic web app for BMP Studio' },
  { id: 2, title: 'skysync', description: 'A dynamic web app for displaying weather data' },
  { id: 3, title: 'Files Manager', description: 'A files manager built with NodeJs, existing only on the CLI.' },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold text-center mt-20">
        My Portfolio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold">
              {project.title}
            </h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
