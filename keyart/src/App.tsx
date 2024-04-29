import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  useEffect(() => {
    const scrollHandler = () => {
      // No need for scrollIntoView logic here since we are handling scrolling with links
    };

    // Add event listener for scrolling
    window.addEventListener('scroll', scrollHandler);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div>
        <Header scrollToSection={scrollToSection} />
        <main>
          <Home id="home" />
          <About id="about" />
          <Gallery id="gallery"/>
          <Contact id="contact" />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;