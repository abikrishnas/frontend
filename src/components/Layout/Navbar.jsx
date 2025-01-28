import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/recommended', label: 'Recommended' }, // Moved between Home and Categories
    { path: '/category/1', label: 'Category 1' },
    { path: '/category/2', label: 'Category 2' },
    { path: '/category/3', label: 'Category 3' }
  ];

  return (
    <nav className="bg-teal-800/50 backdrop-blur-sm border border-teal-700/30 rounded-full mx-4 mt-4 px-6 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white hover:text-pink-200 transition-colors">
          News Segregator
        </Link>
        
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${
                location.pathname === link.path
                  ? 'text-white font-medium'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-white bg-pink-200/20 px-4 py-2 rounded-full hover:bg-pink-200/30 transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="text-teal-800 bg-pink-200 px-4 py-2 rounded-full hover:bg-pink-300 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;