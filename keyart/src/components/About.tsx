import React from 'react';
import '../styles/About.css';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className=" body-font bg-black text-white"> {/* Adjusted background and text color */}
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <div className="bg-black-100 h-full rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 h-24 object-cover object-center w-full"
                src="https://source.unsplash.com/1600x900/?artist,portrait"
                alt="Artist Portrait"
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="text-container">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> {/* Changed text color */}
              About Me
            </h1>
            <p className="leading-loose text-gray-600">
              <strong>Name:</strong> Simon Keya<br />
              <strong>Profession:</strong> Artist<br />
              <strong>Interests:</strong> Art, Technology, Psychology, Philosophy, Self Improvement.
            </p>
            <p className="lg:w-full mx-auto leading-relaxed text-base">
              I am a passionate artist with a deep love for creating unique and expressive
              paintings. I have been painting for atleast 3 years, my pieces are created with both acrylic and oil paint. I also create some sketches using a pencil sometimes, my work is influenced by a variety of sources, and I am constantly
              exploring new techniques and mediums to bring my visions to life.  I aspire to create works that captivate the senses and leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;