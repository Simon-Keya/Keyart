import React from 'react';

interface PaintingCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const PaintingCard: React.FC<PaintingCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default PaintingCard;
