import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeOff, Eye, Mail, Lock, User, Dumbbell } from 'lucide-react';

const sportOptions = [
  'Running', 'Cycling', 'Swimming', 'Triathlon', 'CrossFit', 
  'Weightlifting', 'Yoga', 'Rock Climbing', 'Tennis', 'Basketball',
  'Soccer', 'Volleyball', 'Golf', 'Boxing', 'Martial Arts'
];

interface RegisterFormProps {
  onRegister: (name: string, email: string, password: string, sports: string[]) => void;
  isLoading?: boolean;
  error?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister, isLoading, error }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [sports, setSports] = useState<string[]>([]);
  const [passwordError, setPasswordError] = useState('');
  
  const handleSportToggle = (sport: string) => {
    if (sports.includes(sport)) {
      setSports(sports.filter(s => s !== sport));
    } else {
      setSports([...sports, sport]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return;
    }
    
    setPasswordError('');
    onRegister(name, email, password, sports);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          {passwordError && (
            <p className="text-red-600 text-sm mt-1">{passwordError}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2 flex items-center">
            <Dumbbell className="h-5 w-5 mr-2 text-gray-500" />
            What sports are you interested in?
          </label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {sportOptions.map(sport => (
              <div key={sport} className="flex items-center">
                <input
                  id={`sport-${sport}`}
                  type="checkbox"
                  checked={sports.includes(sport)}
                  onChange={() => handleSportToggle(sport)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor={`sport-${sport}`} className="ml-2 text-sm text-gray-700">
                  {sport}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;