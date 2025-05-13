import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { User } from './types';

function App() {
  const [user, setUser] = useState<User | null>(null);
  
  const handleLogin = (email: string, password: string) => {
    // In a real app, this would validate credentials with an API
    // For demo purposes, we're just creating a user object
    const newUser: User = {
      id: '1',
      name: 'Demo User',
      email: email,
      sports: ['Running', 'Cycling'],
      dietaryPreferences: ['High protein', 'Low carb']
    };
    
    setUser(newUser);
  };
  
  const handleRegister = (name: string, email: string, password: string, sports: string[]) => {
    // In a real app, this would create a user account via an API
    // For demo purposes, we're just creating a user object
    const newUser: User = {
      id: '1',
      name: name,
      email: email,
      sports: sports
    };
    
    setUser(newUser);
  };
  
  const handleLogout = () => {
    setUser(null);
  };
  
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage isLoggedIn={!!user} onLogout={handleLogout} />} 
        />
        <Route 
          path="/login" 
          element={<LoginPage isLoggedIn={!!user} onLogin={handleLogin} />} 
        />
        <Route 
          path="/register" 
          element={<RegisterPage isLoggedIn={!!user} onRegister={handleRegister} />} 
        />
        {/* Additional routes will be added as we develop more pages */}
      </Routes>
    </Router>
  );
}

export default App;