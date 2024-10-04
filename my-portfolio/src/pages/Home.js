import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-extrabold mt-20">
        Hello World, I go by Azara. Actual name? Yushahu Yussif!
      </h1>
      <p className="text-xl mt-4">
        A developer passionate about building anything with code blocks.
      </p>

      <div className="mt-8">
        <button className="bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-lg shadow-lg">
          <Link to='/portfolio'>
            View Portfolio
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Home;
