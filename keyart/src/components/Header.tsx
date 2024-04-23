import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <header className="bg-gray-800 shadow-lg pb-2 text-white">  
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="flex items-center text-2xl font-bold">
              <img src="/logo.png" alt="keyart" className="w-8 h-8 mr-2" />
              KEYART
            </Link>
          </div>
          <div>
            <ul className="flex items-center">
              <li className="mr-4">  
                <button onClick={() => scrollToSection('home')} className="hover:text-gray-200 px-3 py-2">
                  Home
                </button>
              </li>
              <li className="mr-4">  
                <button onClick={() => scrollToSection('about')} className="hover:text-gray-200 px-3 py-2">
                  About
                </button>
              </li>
              <li className="mr-4">  
                <button onClick={() => scrollToSection('gallery')} className="hover:text-gray-200 px-3 py-2">
                  Gallery
                </button>
              </li>
              <li>  
                <button onClick={() => scrollToSection('contact')} className="hover:text-gray-200 px-3 py-2">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
