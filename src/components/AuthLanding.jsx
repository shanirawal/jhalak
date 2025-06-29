import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthLanding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (isAuthenticated) {
      navigate('/questions');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-100">
      <div className="bg-neutral-700 p-10 rounded-2xl shadow-xl w-96 max-w-md flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-6">Welcome!</h2>
        <p className="text-gray-300 mb-8 text-center">Sign in or create an account to begin your journey.</p>
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mb-4"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="w-full bg-white text-blue-700 font-semibold py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AuthLanding; 