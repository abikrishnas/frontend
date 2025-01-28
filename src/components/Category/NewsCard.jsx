// src/components/Category/NewsCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';

const NewsCard = ({ image, title, excerpt, author, date }) => {
  return (
    <div className="bg-teal-700/30 rounded-lg overflow-hidden hover:bg-teal-700/40 transition-colors p-4">
      <div className="flex gap-6">
        {/* Image Container */}
        <div className="w-1/4 min-w-[200px]">
          <div className="aspect-square rounded-lg overflow-hidden">
            {image ? (
              <img src={image} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-800/50">
                No Image
              </div>
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className="w-3/4">
          <h3 className="text-xl font-bold text-white mb-3 hover:text-pink-200">
            {title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-3">{excerpt}</p>
          
          <div className="flex items-center justify-between text-gray-400 text-sm mt-auto">
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>{author || 'Unknown Author'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{date || 'No date'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;