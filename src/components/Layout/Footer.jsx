import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">News Segregator</h2>
            <p className="text-gray-300">contact@newssegregator.com</p>
            <p className="text-gray-300 mt-2">© 2024 NEWSSEGREGATOR. All rights reserved.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-12">
            {[1, 2, 3].map((section) => (
              <div key={section}>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item}>
                      <Link to="#" className="text-gray-300 hover:text-white">
                        Lorem ipsum
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;