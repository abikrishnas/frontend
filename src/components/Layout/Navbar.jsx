import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-teal-800/50 rounded-full mx-4 mt-4 px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-white text-xl font-bold">
        News Segregator
      </Link>
      
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/category/1" className="text-gray-300">Category 1</Link>
        <Link to="/category/2" className="text-gray-300">Category 2</Link>
        <Link to="/category/3" className="text-gray-300">Category 3</Link>
        <Link to="/recommended" className="text-gray-300">Recommended</Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/login" className="text-white bg-pink-200/20 px-4 py-2 rounded-full">
          Log in
        </Link>
        <Link to="/signup" className="text-teal-800 bg-pink-200 px-4 py-2 rounded-full">
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;