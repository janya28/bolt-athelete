import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/authentication/LoginForm';
import Layout from '../components/layout/Layout';

interface LoginPageProps {
  isLoggedIn: boolean;
  onLogin: (email: string, password: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ isLoggedIn, onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleLogin = (email: string, password: string) => {
    setIsLoading(true);
    setError(undefined);
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, just simulate login
      onLogin(email, password);
      setIsLoading(false);
    }, 1500);
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <Layout isLoggedIn={isLoggedIn}>
      <div className="min-h-screen bg-gray-100 py-20 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <LoginForm 
            onLogin={handleLogin} 
            isLoading={isLoading} 
            error={error} 
          />
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;