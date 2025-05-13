import React from 'react';
import { Dumbbell } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="bg-blue-600 p-2 rounded-md">
        <Dumbbell className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

export default Logo;