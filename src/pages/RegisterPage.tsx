import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import RegisterForm from '../components/authentication/RegisterForm';
import Layout from '../components/layout/Layout';

interface RegisterPageProps {
  isLoggedIn: boolean;
  onRegister: (name: string, email: string, password: string, sports: string[]) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ isLoggedIn, onRegister }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleRegister = (name: string, email: string, password: string, sports: string[]) => {
    setIsLoading(true);
    setError(undefined);
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, just simulate registration
      onRegister(name, email, password, sports);
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
          <RegisterForm 
            onRegister={handleRegister} 
            isLoading={isLoading} 
            error={error} 
          />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;