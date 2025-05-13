export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  sports: string[];
  dietaryPreferences?: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  sportType: string;
  image: string;
  registrationUrl?: string;
}

export interface Accommodation {
  id: string;
  name: string;
  description: string;
  location: string;
  price: string;
  rating: number;
  amenities: string[];
  image: string;
  athleteFriendly: boolean;
  distance?: string;
}

export interface TrainingFacility {
  id: string;
  name: string;
  description: string;
  location: string;
  sportTypes: string[];
  amenities: string[];
  image: string;
  openingHours: string;
  rating: number;
  price?: string;
}

export interface Itinerary {
  id: string;
  userId: string;
  title: string;
  startDate: string;
  endDate: string;
  events: Event[];
  accommodations: Accommodation[];
  trainingFacilities: TrainingFacility[];
  mealPlans?: MealPlan[];
}

export interface MealPlan {
  id: string;
  day: string;
  meals: Meal[];
}

export interface Meal {
  id: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  name: string;
  description: string;
  nutritionInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}