import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Apps from './components/sections/Apps';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import AppModal from './components/apps/AppModal';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentApp, setCurrentApp] = useState(null);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for the fixed header
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
  };

  const openModal = (e, app) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentApp(app);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <ThemeProvider>
      <div className="App">
        <GlobalStyles />
        <Header scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <Apps openModal={openModal} />
        <About />
        <Contact handleSubmit={handleSubmit} />
        <AppModal 
          isOpen={modalOpen} 
          app={currentApp} 
          onClose={closeModal} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
