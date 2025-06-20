import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import AppPage from './components/apps/AppPage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
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

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <GlobalStyles />
          <Header scrollToSection={scrollToSection} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apps/:appId" element={<AppPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
