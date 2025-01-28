import React from 'react';

const Hero = () => {
  return (
    <div className="bg-teal-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Quality news, where you want it,
          <br />
          when you want it.
        </h1>
        <p className="text-gray-300 mb-8 italic">
          "A reader lives a thousand lives before he dies. The man who never reads lives only one."
          <br />
          - George R.R. Martin
        </p>
        
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search your interest"
            className="w-full bg-teal-700/50 rounded-md p-4 text-white placeholder-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;