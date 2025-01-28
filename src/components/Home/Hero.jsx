import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-teal-800 to-teal-900 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Quality news, where you want it,
          <br />
          when you want it.
        </h1>
        <p className="text-gray-300 mb-8 text-lg italic">
          "A reader lives a thousand lives before he dies. The man who never reads lives only one."
          <br />
          <span className="text-pink-200">- George R.R. Martin</span>
        </p>
        
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search your interest"
            className="w-full bg-teal-700/50 rounded-full px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200/50"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;