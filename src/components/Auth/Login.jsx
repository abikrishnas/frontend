import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-teal-800 flex items-center justify-center">
      <div className="w-1/2 p-8">
        <h1 className="text-pink-200 text-6xl font-bold">News Segregator</h1>
      </div>
      <div className="w-1/2 p-8">
        <div className="bg-teal-700/50 rounded-lg p-8 max-w-md mx-auto">
          <h2 className="text-white text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-300 mb-8">Sign in to your account to continue</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-teal-600/50 rounded-md p-3 text-white placeholder-gray-300"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full bg-teal-600/50 rounded-md p-3 text-white placeholder-gray-300"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-white text-teal-800 rounded-md py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-8">
            <div className="text-center text-gray-300 mb-4">Sign in with Google</div>
            <button className="w-full border border-gray-300 rounded-md py-3 text-white flex items-center justify-center gap-2">
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
              Google
            </button>
          </div>

          <p className="text-center text-gray-300 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-white underline hover:text-pink-200">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;