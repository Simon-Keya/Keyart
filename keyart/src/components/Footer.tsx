import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import social media icons
import { IconProp } from '@fortawesome/fontawesome-svg-core'; 
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className=" flex-row md:flex-row md:justify-between items-start mb-4">
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/simon-keya" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={faLinkedin as IconProp} className="text-2xl hover:text-blue-500 transition duration-300" />
          </a>
                    {/* Twitter */}
          <a href="https://twitter.com/SymonC137" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={faTwitter as IconProp} className="text-2xl hover:text-blue-400 transition duration-300" />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/symon_keya/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram as IconProp} className="text-2xl hover:text-pink-500 transition duration-300" />
          </a>
        </div>
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Keyart. All rights reserved.</p>
          <p>Based in Narok & Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
