import React from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Train Anywhere, <span className="text-orange-400">Compete Everywhere</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            The ultimate travel platform for athletes. Find event-friendly accommodations, 
            training facilities, and nutrition options while traveling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/events" 
              className="bg-white text-blue-700 hover:bg-gray-100 transition-colors px-8 py-3 rounded-lg font-semibold flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Find Events
            </Link>
            <Link 
              to="/register" 
              className="bg-orange-500 hover:bg-orange-600 transition-colors px-8 py-3 rounded-lg font-semibold flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  <MapPin className="w-4 h-4 inline-block mr-1" /> Location
                </label>
                <input 
                  type="text" 
                  placeholder="City or destination" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  <Calendar className="w-4 h-4 inline-block mr-1" /> Event Date
                </label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  <Search className="w-4 h-4 inline-block mr-1" /> Sport Type
                </label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800"
                >
                  <option value="">Any sport</option>
                  <option value="running">Running</option>
                  <option value="cycling">Cycling</option>
                  <option value="swimming">Swimming</option>
                  <option value="triathlon">Triathlon</option>
                  <option value="weightlifting">Weightlifting</option>
                </select>
              </div>
              <div className="md:self-end mt-6 md:mt-0">
                <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;