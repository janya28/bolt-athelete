import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  sport: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    sport: "Marathon Runner",
    quote: "AthleteTravel made planning for my Boston Marathon so much easier. I found a hotel with meal prep options just minutes from the starting line. Highly recommend!",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Marcus Chen",
    sport: "Triathlete",
    quote: "As someone who competes in several Ironman events yearly, finding accommodations with proper recovery facilities is crucial. This platform has been a game-changer for my travel planning.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    sport: "CrossFit Athlete",
    quote: "I used to struggle finding gyms that would allow drop-ins during competitions. Now I can plan my entire trip around venues that support my training needs.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handlePrev = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Athletes Say About Us</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Athletes just like you are using our platform to plan their perfect training and competition trips.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden transition-opacity duration-500">
              <div className="md:w-1/3 h-64 md:h-auto">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="text-4xl text-blue-600 font-serif">"</div>
                <p className="text-lg mb-6 italic">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div>
                  <p className="font-bold text-xl">{testimonials[currentTestimonial].name}</p>
                  <p className="text-blue-600">{testimonials[currentTestimonial].sport}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-white text-blue-600 shadow-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6">
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white text-blue-600 shadow-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  currentTestimonial === index ? 'bg-white' : 'bg-blue-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;