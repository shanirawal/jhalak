import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email || !password) {
      setErrorMsg('Please fill in all fields');
      return;
    }

    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', userCredential.user.email);
      navigate('/questions');
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-100">
      <div className="bg-neutral-700 p-8 rounded-2xl shadow-xl w-96 max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">Skein</h1>
          <h2 className="text-2xl font-light text-white mb-2">Create your account</h2>
          <p className="text-gray-400 text-sm">Join the cultural journey</p>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-500 bg-neutral-600 text-white rounded-lg focus:outline-none placeholder-gray-400"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-500 bg-neutral-600 text-white rounded-lg focus:outline-none placeholder-gray-400 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        {errorMsg && (
          <div className="mb-4 text-red-400 text-sm bg-red-900/20 border border-red-500/30 rounded-lg p-3">
            {errorMsg}
          </div>
        )}
        <button
          onClick={handleSignup}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mb-6"
        >
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
        <div className="text-center">
          <span className="text-gray-400 text-sm">Already have an account? </span>
          <button
            onClick={handleLoginRedirect}
            className="text-gray-300 text-sm hover:text-white underline"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
