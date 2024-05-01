import React from 'react';

import DrawingCard from './DrawingCard'; // Import DrawingCard component

import PaintingCard from './PaintingCard'; // Import PaintingCard component

import paintingsData from '../paintings.json'; // Import the paintings data

import drawingsData from '../drawings.json'; // Import the drawings data



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

    <div id={id} className="mb-8 bg-black text-white p-8"> {/* Updated styles */}

      <h1 className="text-6xl font-bold mb-4">Gallery</h1> {/* Increased font size */}

      <section className="mb-4">

        <h2 className="text-2xl font-semibold mb-2">Paintings</h2> {/* Medium size for paintings title */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {paintings.map((painting) => (

            <PaintingCard key={painting.title} {...painting} />

          ))}

        </div>

      </section>

      <section>

        <h2 className="text-2xl font-semibold mb-2">Drawings</h2> {/* Medium size for drawings title */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {drawings.map((drawing) => (

            <DrawingCard key={drawing.title} {...drawing} />

          ))}

        </div>

      </section>

    </div>

  );

};



export default Gallery;