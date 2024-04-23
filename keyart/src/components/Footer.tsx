import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-row md:flex-row md:justify-between items-start"> {/* Changed 'items-center' to 'items-start' */}
          <div className="flex items-start justify-start md:justify-start"> {/* Changed 'justify-center' to 'justify-start' */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-black-500 p-2 bg-gray-200 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="ml-3 text-white text-xl">Okumu</span>
          </div>
          <div className="flex flex-row md:flex-row md:items-start md:justify-between mt-4 md:mt-0">
            <p className="text-black-500 mb-2 md:mb-0">
              Follow me:
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open("https://www.instagram.com/fineart", "_blank")}
                className="text-white hover:text-white"
              >
                <FaInstagram />
              </button>
              <button
                onClick={() => window.open("https://www.twitter.com/fineart", "_blank")}
                className="text-white hover:text-white"
              >
                <FaTwitter />
              </button>
            </div>
          </div>
          <div className="flex flex-row md:flex-row md:items-right md:justify-between mt-4 md:mt-0">
            <p className="text-black-500 mb-2 md:mb-0">
              Privacy Terms & Policy
            </p>
          </div>
          <p className="text-black-500 flex-grow text-right">© {new Date().getFullYear()} OkumuGalore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
