import React, { useState } from 'react';

interface CarouselProps {
  images: string[];       // Array of image URLs
  descriptions?: string[]; // Optional array of descriptions for each image
}

const Carousel: React.FC<CarouselProps> = ({ images, descriptions }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-auto"
        />
        {descriptions && descriptions[currentSlide] && ( // Check if descriptions exist and display description for current slide
          <p className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white text-center p-2">
            {descriptions[currentSlide]}
          </p>
        )}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
