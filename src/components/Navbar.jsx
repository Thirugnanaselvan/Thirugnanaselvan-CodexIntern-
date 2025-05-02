import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-orange-500 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        Coding Ninjas Clone
      </div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/courses" className="hover:text-gray-300">Courses</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
