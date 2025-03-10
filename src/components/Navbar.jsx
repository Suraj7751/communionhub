import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">CommunionHub</h1>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/events" className="mx-2">Events</Link>
        <Link to="/about" className="mx-2">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
