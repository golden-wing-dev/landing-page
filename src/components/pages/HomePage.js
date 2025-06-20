import React, { useState } from 'react';
import Hero from '../sections/Hero';
import Apps from '../sections/Apps';
import About from '../sections/About';
import Contact from '../sections/Contact';

const HomePage = () => {
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

  return (
    <>
      <Hero scrollToSection={scrollToSection} />
      <Apps />
      <About />
      <Contact handleSubmit={handleSubmit} />
    </>
  );
};

export default HomePage; 