import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Athletic Travel?</h2>
          <p className="text-xl mb-8">
            Join thousands of athletes who are planning smarter, training better, and performing at their peak with AthleteTravel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="bg-white text-orange-600 hover:bg-gray-100 transition-colors px-8 py-3 rounded-lg font-semibold"
            >
              Sign Up Now
            </Link>
            <Link 
              to="/events" 
              className="bg-transparent border-2 border-white hover:bg-white/10 transition-colors px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
            >
              Browse Events
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;