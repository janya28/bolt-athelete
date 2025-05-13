import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 text-xl font-bold text-blue-400">AthleteTravel</span>
            </div>
            <p className="text-gray-400 mb-4">
              Helping athletes find the perfect accommodations, training facilities, and nutrition 
              options while traveling for competitions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Find Events
                </Link>
              </li>
              <li>
                <Link to="/accommodations" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Training Facilities
                </Link>
              </li>
              <li>
                <Link to="/nutrition" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Nutrition Planning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-blue-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-gray-400">123 Athlete Avenue, Sports City</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-gray-400">info@athletetravel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AthleteTravel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;