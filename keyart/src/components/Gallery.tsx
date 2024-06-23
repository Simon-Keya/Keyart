import React from 'react';
import drawingsData from '../drawings.json'; // Import the drawings data
import paintingsData from '../paintings.json'; // Import the paintings data
import '../styles/Gallery.css';
import DrawingCard from './DrawingCard'; // Import DrawingCard component
import PaintingCard from './PaintingCard'; // Import PaintingCard component

interface Artwork {
  title: string;
  imageUrl: string;
  description: string;
}

interface GalleryProps {
  id: string; // ID of the section for scrolling
}

const Gallery: React.FC<GalleryProps> = ({ id }) => {
  const paintings = paintingsData as Artwork[]; // Cast paintings data to Artwork type
  const drawings = drawingsData as Artwork[]; // Cast drawings data to Artwork type

  return (
    <div id={id} className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <section className="gallery-section">
        <h2 className="gallery-section-title">Paintings</h2>
        <div className="gallery-grid">
          {paintings.map((painting) => (
            <PaintingCard key={painting.title} {...painting} />
          ))}
        </div>
      </section>
      <section className="gallery-section">
        <h2 className="gallery-section-title">Drawings</h2>
        <div className="gallery-grid">
          {drawings.map((drawing) => (
            <DrawingCard key={drawing.title} {...drawing} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
