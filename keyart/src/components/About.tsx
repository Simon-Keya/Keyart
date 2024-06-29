import { faArrowUp, faBook, faBrain, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../styles/About.css';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const interests = [
    {
      title: 'Technology',
      description: 'Explore my technological interests and projects. Visit my tech portfolio website [here](https://simon-keya.vercel.app/).',
      link: 'https://simon-keya.vercel.app/',
    },
    {
      title: 'Psychology',
      description: 'I am deeply interested in psychology and the workings of the human mind. This interest often influences my artistic creations.',
    },
    {
      title: 'Self Improvement',
      description: 'I believe in continuous self-improvement and strive to better myself every day. This philosophy is reflected in both my personal and professional life.',
    },
    {
      title: 'Philosophy',
      description: 'Philosophy deeply influences my worldview and artistic expressions. I enjoy exploring various philosophical ideas and their implications on art and life.',
    },
  ];

  const [currentDescription, setCurrentDescription] = useState('');

  const handleIconClick = (interestTitle: string) => {
    const description = interests.find((interest) => interest.title === interestTitle)?.description;
    setCurrentDescription(description || '');
  };

  return (
    <section id={id} className="body-font bg-black text-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <div className="bg-black-100 h-full rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 h-24 object-cover object-center w-full"
                src="/assets/Artists Profile.jpg"
                alt="Artist Profile"
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="text-container">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              About
            </h1>
            <p className="leading-loose text-gray-600">
              <strong>Name:</strong> Simon Keya<br />
              <strong>Profession:</strong> Artist<br />
              <strong>Interests:</strong> Art, Technology, Psychology, Philosophy, Self Improvement.
            </p>
            <p className="lg:w-full mx-auto leading-relaxed text-base">
              I am a passionate artist with a deep love for creating unique and expressive
              paintings. I have been painting for at least 3 years. My pieces are created with both acrylic and oil paint. I also create some sketches using a pencil sometimes. My work is influenced by a variety of sources, and I am constantly
              exploring new techniques and mediums to bring my visions to life. I aspire to create works that captivate the senses and leave a lasting impression.
            </p>
            <h2 className="sm:text-xl text-lg font-medium subtitle-font mt-8 text-gray-900">Artistic Journey</h2>
            <p className="lg:w-full mx-auto leading-relaxed text-base mt-4">
              My artistic journey began in childhood, where I found solace and expression through drawing and painting. Over the years, I have honed my skills and developed a distinct style that blends realism with abstract elements. My work often explores themes of identity, emotion, and the human experience.
            </p>
          </div>
        </div>
        {/* Interest Sections */}
        <div className="features-container">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="feature-item"
              onClick={() => handleIconClick(interest.title)}
            >
              <FontAwesomeIcon
                icon={
                  interest.title === 'Technology' ? faLaptopCode :
                  interest.title === 'Psychology' ? faBrain :
                  interest.title === 'Self Improvement' ? faArrowUp :
                  faBook
                }
                className="text-white text-2xl mr-4"
              />
              <span className="text-white text-xl">{interest.title}</span>
            </div>
          ))}
        </div>
        {currentDescription && (
          <div className="description-container">
            <p>{currentDescription}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
