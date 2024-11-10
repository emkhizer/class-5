// components/CardsSection.tsx
import React from 'react';

const Card1: React.FC = () => {
  return (
    <div className="space-y-12 p-8">
      {/* Three Cards in a Row */}
      <div className="grid grid-cols-1  sm:grid-cols-3 gap-8">
        {[1, 2, 3].map((card) => (
          <div key={card} className="bg-slate-300 border border-gray-300 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Card {card}</h3>
            <p className="text-blue-900">This is a description for card {card}.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1;
