import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', formData);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-teal-800 flex items-center justify-center">
      <div className="w-1/2 p-8">
        <h1 className="text-pink-200 text-6xl font-bold">News Segregator</h1>
      </div>
      <div className="w-1/2 p-8">
        <div className="bg-teal-700/50 rounded-lg p-8 max-w-md mx-auto">
          <h2 className="text-white text-3xl font-bold mb-2">Create your account</h2>
          <p className="text-gray-300 mb-8">Enter your details below to create your account</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-teal-600/50 rounded-md p-3 text-white placeholder-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-teal-600/50 rounded-md p-3 text-white placeholder-gray-300"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full bg-teal-600/50 rounded-md p-3 text-white placeholder-gray-300"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full bg-teal-600/50 rounded-md p-3 text-white placeholder-gray-300"
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-teal-800 rounded-md py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8">
            <div className="text-center text-gray-300 mb-4">Or sign up with Google</div>
            <button className="w-full border border-gray-300 rounded-md py-3 text-white flex items-center justify-center gap-2">
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
              Google
            </button>
          </div>

          <p className="text-center text-gray-300 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-white underline hover:text-pink-200">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;