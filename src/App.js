import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/layout/Header';
import HomePage from './components/pages/HomePage';
import AppPage from './components/apps/AppPage';
import PrivacyPolicyPage from './components/apps/PrivacyPolicyPage';
import TermsOfServicePage from './components/apps/TermsOfServicePage';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If we're already on the home page, scroll directly
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80, // Offset for the fixed header
          behavior: 'smooth'
        });
      }
    }
  };

  // Handle scrolling when navigating to home page with a section target
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      // Use a timeout to ensure the DOM is rendered
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="App">
      <GlobalStyles />
      <Header scrollToSection={scrollToSection} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps/:appId" element={<AppPage />} />
        <Route path="/apps/:appId/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/apps/:appId/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
