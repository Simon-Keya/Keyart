// DrawingCard.tsx
import React from 'react';

interface DrawingCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const DrawingCard: React.FC<DrawingCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-40 h-40" src={imageUrl} alt={title} /> {/* Adjusted image size */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default DrawingCard;
