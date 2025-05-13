import React, { useState } from 'react';
import { Filter, MapPin, Calendar, Dumbbell, DollarSign, Star } from 'lucide-react';

interface SearchFiltersProps {
  onFilterChange: (filters: Record<string, any>) => void;
  type: 'events' | 'accommodations' | 'facilities';
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilterChange, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    date: '',
    sportType: '',
    priceRange: '',
    amenities: [] as string[],
    rating: ''
  });
  
  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  
  const handleAmenityToggle = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    
    setFilters({ ...filters, amenities: newAmenities });
  };
  
  const handleApplyFilters = () => {
    onFilterChange(filters);
    setIsOpen(false);
  };
  
  const handleClearFilters = () => {
    const emptyFilters = {
      location: '',
      date: '',
      sportType: '',
      priceRange: '',
      amenities: [] as string[],
      rating: ''
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };
  
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button
          onClick={toggleFilters}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Filter className="w-4 h-4 mr-1" />
          {isOpen ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      {isOpen && (
        <div className="bg-white rounded-xl shadow-md p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> Location
              </label>
              <input
                type="text"
                name="location"
                value={filters.location}
                onChange={handleChange}
                placeholder="City, region, or address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-1" /> Date
              </label>
              <input
                type="date"
                name="date"
                value={filters.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Dumbbell className="w-4 h-4 mr-1" /> Sport Type
              </label>
              <select
                name="sportType"
                value={filters.sportType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Any sport</option>
                <option value="running">Running</option>
                <option value="cycling">Cycling</option>
                <option value="swimming">Swimming</option>
                <option value="triathlon">Triathlon</option>
                <option value="weightlifting">Weightlifting</option>
                <option value="crossfit">CrossFit</option>
              </select>
            </div>
            
            {(type === 'accommodations' || type === 'facilities') && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" /> Price Range
                  </label>
                  <select
                    name="priceRange"
                    value={filters.priceRange}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Any price</option>
                    <option value="budget">Budget (under $100)</option>
                    <option value="mid">Mid-range ($100-$200)</option>
                    <option value="premium">Premium ($200+)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Star className="w-4 h-4 mr-1" /> Minimum Rating
                  </label>
                  <select
                    name="rating"
                    value={filters.rating}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Any rating</option>
                    <option value="3">3+ stars</option>
                    <option value="4">4+ stars</option>
                    <option value="4.5">4.5+ stars</option>
                  </select>
                </div>
              </>
            )}
          </div>
          
          {(type === 'accommodations' || type === 'facilities') && (
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Athlete-friendly Amenities
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {['Gym', '24/7 Access', 'Pool', 'Recovery Facilities', 'Meal Prep', 'Healthy Menu Options', 'Equipment Rental', 'Trainers Available'].map(amenity => (
                  <div key={amenity} className="flex items-center">
                    <input
                      id={`amenity-${amenity}`}
                      type="checkbox"
                      checked={filters.amenities.includes(amenity)}
                      onChange={() => handleAmenityToggle(amenity)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`amenity-${amenity}`} className="ml-2 text-sm text-gray-700">
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={handleApplyFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;