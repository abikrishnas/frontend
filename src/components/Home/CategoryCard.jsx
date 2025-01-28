import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, description }) => {
  return (
    <Link to={`/category/${title.toLowerCase()}`}>
      <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 bg-pink-200 rounded-full mb-4"></div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;