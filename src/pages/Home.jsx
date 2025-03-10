import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <header className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold">Connecting People Across Faiths & Interests</h1>
        <p className="mt-2 text-lg">Connecting people of all faiths through events and community support.</p>
        <Link to="/events" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">Explore Events</Link>
      </header>
    </div>
  );
};

export default Home;
