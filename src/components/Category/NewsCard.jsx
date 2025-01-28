import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ image, title, excerpt }) => {
  return (
    <div className="bg-teal-700/30 rounded-lg overflow-hidden">
      <div className="aspect-video bg-gray-200">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            IMAGE
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{excerpt}</p>
        <Link
          to="#"
          className="text-pink-200 hover:text-pink-300 inline-flex items-center"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;