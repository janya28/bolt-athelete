import React, { useState } from 'react';
import { ArrowRight, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Event } from '../../types';

// Sample data for demonstration
const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Boston Marathon',
    description: 'One of the world\'s oldest annual marathons and one of the six World Marathon Majors.',
    location: 'Boston, MA',
    startDate: '2025-04-21',
    endDate: '2025-04-21',
    sportType: 'Running',
    image: 'https://images.pexels.com/photos/2764989/pexels-photo-2764989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'Ironman World Championship',
    description: 'The annual culmination of the global Ironman triathlon series.',
    location: 'Kailua-Kona, Hawaii',
    startDate: '2025-10-14',
    endDate: '2025-10-14',
    sportType: 'Triathlon',
    image: 'https://images.pexels.com/photos/2421562/pexels-photo-2421562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    title: 'CrossFit Games',
    description: 'An annual athletic competition owned and operated by CrossFit, LLC.',
    location: 'Madison, WI',
    startDate: '2025-08-03',
    endDate: '2025-08-07',
    sportType: 'CrossFit',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    title: 'Chicago Triathlon',
    description: 'One of the largest triathlons in the world.',
    location: 'Chicago, IL',
    startDate: '2025-08-29',
    endDate: '2025-08-30',
    sportType: 'Triathlon',
    image: 'https://images.pexels.com/photos/2262347/pexels-photo-2262347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const EventsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const eventsPerPage = 3;
  const totalPages = Math.ceil(sampleEvents.length / eventsPerPage);
  
  const handlePrev = () => {
    setCurrentIndex(prev => 
      prev === 0 ? sampleEvents.length - eventsPerPage : prev - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => 
      prev + eventsPerPage >= sampleEvents.length ? 0 : prev + 1
    );
  };
  
  const visibleEvents = sampleEvents.slice(
    currentIndex, 
    Math.min(currentIndex + eventsPerPage, sampleEvents.length)
  );

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover and plan for the most exciting athletic events around the world.
            </p>
          </div>
          <Link 
            to="/events" 
            className="inline-flex items-center text-blue-600 font-semibold mt-4 md:mt-0 group"
          >
            View All Events
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleEvents.map((event) => (
              <div 
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-blue-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded-br-lg">
                    {event.sportType}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{formatDate(event.startDate)}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-2">{event.description}</p>
                  <Link 
                    to={`/events/${event.id}`}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full border border-gray-300 mr-2 hover:bg-gray-100 transition-colors"
                aria-label="Previous events"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                aria-label="Next events"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;