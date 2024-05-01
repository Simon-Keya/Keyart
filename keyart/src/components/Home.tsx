import React from 'react';
import '../styles/Home.css';

interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <div id={id} className="relative bg-black text-white bg-cover bg-no-repeat h-screen">
      <div className="bg-gradient-to-r from-black-500 via-black-700 to-black-900 absolute top-0 left-0 h-full w-full bg-opacity-75">
        <div className="container mx-auto px-2 py-20"> {/* Adjusted padding-left from px-4 to px-2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image on the left */}
            <div>
              <img
                src="/assets/Art.jpg"
                alt="Art"
              />
            </div>
            {/* Text content on the right */}
            <div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  ART
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  PORTFOLIO
                </h2>
                <h3 className="text-xl md:text-2xl mb-4">
                  SIMON KEYA 
                </h3>
                <h4 className="text-lg md:text-xl">
                  ARTIST PORTFOLIO WEBSITE
                </h4>
              </div>
              <p className="text-lg md:text-xl mt-6">
                Welcome to my portfolio website! Here you can explore my latest artworks, learn more about my artistic journey, and contact me for commissions or collaborations. My goal is to create art that resonates with the soul and evokes emotions.
              </p>
              <p className="text-lg md:text-xl mt-4">
                Browse through my gallery to discover the beauty of art through my eyes. Feel free to reach out to me with any inquiries or project ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
