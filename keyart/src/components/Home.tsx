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
              Greetings! Welcome to my portfolio website! This portfolio is my sanctuary of soulful creations. Here, art transcends mere visuals—it whispers emotions, dances with colors, and invites you to experience beauty. You can explore my latest artworks, trace the path of my artistic evolution. My mission is to craft pieces that inspire wonder and ignite passion.
              </p>
              <p className="text-lg md:text-xl mt-4">
                Browse through my gallery to discover the beauty of art through my eyes. Feel free to reach out to me with any inquiries or projects that resonate with your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
