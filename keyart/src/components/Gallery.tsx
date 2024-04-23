import React from 'react';
import Carousel from './Carousel';
import paintingsData from '../paintings.json'; // Import the paintings data
import drawingsData from '../drawings.json'; // Import the drawings data

interface Artwork {
  title: string;
  imageUrl: string;
  description: string;
}

interface GalleryProps {
  id: string;                  // ID of the section for scrolling
  title: string;               // Title of the section (e.g., "Paintings" or "Drawings")
}

const Gallery: React.FC<GalleryProps> = ({ id, title }) => { // Adjust the order of props
  let artworks: Artwork[] = [];

  if (title === 'Paintings') {
    artworks = paintingsData;
  } else if (title === 'Drawings') {
    artworks = drawingsData;
  }

  const images = artworks.map(artwork => artwork.imageUrl);
  const descriptions = artworks.map(artwork => artwork.description);

  return (
    <div id={id} className="mb-8"> {/* Added id prop to assign ID to the section */}
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex justify-center">
        <div className="max-w-lg">
          {images.length > 0 ? (
            <Carousel images={images} descriptions={descriptions} />
          ) : (
            <p className="text-white">No {title.toLowerCase()} available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
