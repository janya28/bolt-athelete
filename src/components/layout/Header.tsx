import React, { useState, useEffect } from 'react';
import { Menu, X, UserCircle, LogOut, Search, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
            <span className="ml-2 text-xl font-bold text-blue-600">AthleteTravel</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/events" className="text-gray-700 hover:text-blue-600 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Events</span>
            </Link>
            <Link to="/accommodations" className="text-gray-700 hover:text-blue-600 flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Accommodations</span>
            </Link>
            <Link to="/training" className="text-gray-700 hover:text-blue-600 flex items-center">
              <Search className="w-4 h-4 mr-1" />
              <span>Training Facilities</span>
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link to="/itineraries" className="text-gray-700 hover:text-blue-600">
                  My Itineraries
                </Link>
                <Link to="/profile" className="text-gray-700 hover:text-blue-600 flex items-center">
                  <UserCircle className="w-4 h-4 mr-1" />
                  <span>Profile</span>
                </Link>
                <button 
                  onClick={onLogout}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/events" 
                className="text-gray-700 hover:text-blue-600 py-2 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Events</span>
              </Link>
              <Link 
                to="/accommodations" 
                className="text-gray-700 hover:text-blue-600 py-2 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin className="w-4 h-4 mr-2" />
                <span>Accommodations</span>
              </Link>
              <Link 
                to="/training" 
                className="text-gray-700 hover:text-blue-600 py-2 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="w-4 h-4 mr-2" />
                <span>Training Facilities</span>
              </Link>
              
              {isLoggedIn ? (
                <>
                  <Link 
                    to="/itineraries" 
                    className="text-gray-700 hover:text-blue-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Itineraries
                  </Link>
                  <Link 
                    to="/profile" 
                    className="text-gray-700 hover:text-blue-600 py-2 flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <UserCircle className="w-4 h-4 mr-2" />
                    <span>Profile</span>
                  </Link>
                  <button 
                    onClick={() => {
                      if (onLogout) onLogout();
                      setIsMenuOpen(false);
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-gray-700 hover:text-blue-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;