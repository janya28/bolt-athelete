import React from 'react';
import { Star, ArrowRight, Wifi, Dumbbell, UtensilsCrossed, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accommodation } from '../../types';

// Sample data for demonstration
const sampleAccommodations: Accommodation[] = [
  {
    id: '1',
    name: 'Athlete\'s Retreat Hotel',
    description: 'Designed specifically for athletes with recovery facilities and nutrition-focused dining options.',
    location: 'Boston, MA',
    price: '$150/night',
    rating: 4.8,
    amenities: ['24/7 Gym', 'Pool', 'Meal Planning', 'Recovery Center'],
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    athleteFriendly: true,
    distance: '0.5 miles from Boston Marathon start'
  },
  {
    id: '2',
    name: 'Performance Peak Lodge',
    description: 'High-altitude training accommodation with specialized facilities for endurance athletes.',
    location: 'Boulder, CO',
    price: '$180/night',
    rating: 4.9,
    amenities: ['Altitude Training Rooms', 'Trail Access', 'Sports Nutrition', 'Recovery Tools'],
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    athleteFriendly: true
  },
  {
    id: '3',
    name: 'Endurance Suites',
    description: 'Extended stay options with kitchenettes for athletes needing to prepare their own meals.',
    location: 'San Diego, CA',
    price: '$165/night',
    rating: 4.7,
    amenities: ['Full Kitchen', 'Gym Access', 'Bike Storage', 'Laundry'],
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    athleteFriendly: true
  }
];

const amenityIcons = {
  'Wifi': <Wifi className="w-4 h-4" />,
  'Gym': <Dumbbell className="w-4 h-4" />,
  '24/7 Gym': <Dumbbell className="w-4 h-4" />,
  'Meal Planning': <UtensilsCrossed className="w-4 h-4" />,
  'Sports Nutrition': <UtensilsCrossed className="w-4 h-4" />,
  'Recovery Center': <Bath className="w-4 h-4" />,
  'Recovery Tools': <Bath className="w-4 h-4" />
};

const AccommodationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Athlete-Friendly Accommodations</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Stay where your performance needs are understood and catered to.
            </p>
          </div>
          <Link 
            to="/accommodations" 
            className="inline-flex items-center text-blue-600 font-semibold mt-4 md:mt-0 group"
          >
            View All Accommodations
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleAccommodations.map((accommodation) => (
            <div 
              key={accommodation.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={accommodation.image} 
                  alt={accommodation.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {accommodation.athleteFriendly && (
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 rounded-bl-lg">
                    Athlete Approved
                  </div>
                )}
                {accommodation.distance && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                    <p className="text-sm">{accommodation.distance}</p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{accommodation.name}</h3>
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded-md">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 font-medium">{accommodation.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{accommodation.location}</p>
                <p className="font-semibold text-blue-600 mb-4">{accommodation.price}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Top Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {accommodation.amenities.slice(0, 4).map((amenity, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {Object.keys(amenityIcons).includes(amenity) ? (
                          <span className="mr-1">
                            {amenityIcons[amenity as keyof typeof amenityIcons]}
                          </span>
                        ) : null}
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to={`/accommodations/${accommodation.id}`}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;