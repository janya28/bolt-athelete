import React from 'react';
import { Calendar, MapPin, Clock, Utensils, Dumbbell, Users } from 'lucide-react';

const features = [
  {
    icon: <Calendar className="w-12 h-12 text-blue-600" />,
    title: "Event Search",
    description: "Find competitions and sporting events worldwide tailored to your athletic discipline."
  },
  {
    icon: <MapPin className="w-12 h-12 text-blue-600" />,
    title: "Athlete-Friendly Accommodations",
    description: "Discover hotels and lodging with amenities specifically designed for athletes."
  },
  {
    icon: <Dumbbell className="w-12 h-12 text-blue-600" />,
    title: "Training Facilities",
    description: "Locate gyms and training centers that match your specific training requirements."
  },
  {
    icon: <Utensils className="w-12 h-12 text-blue-600" />,
    title: "Nutrition Planning",
    description: "Access meal options and nutritional resources to maintain your diet while traveling."
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: "Itinerary Management",
    description: "Create comprehensive travel plans that include your training and competition schedule."
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Athlete Community",
    description: "Connect with fellow athletes traveling to the same events or training in the same area."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Athletes, By Athletes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to plan the perfect trip for your training and competition needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="mb-6 inline-block p-4 bg-blue-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;