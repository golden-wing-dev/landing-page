import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import apps from '../../data/apps';
import Container from '../layout/Container';

const AppPageContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding-top: 120px;
  padding-bottom: 80px;
  background: var(--background);
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--hover-color);
    transform: translateX(-5px);
  }
`;

const AppHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AppLogo = styled.div`
  width: 120px;
  height: 120px;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.5)' : 
    'rgba(255, 255, 255, 0.5)'
  };
  border-radius: 15px;
  padding: 1rem;
  box-shadow: ${props => props.isDarkMode ? 
    '0 4px 6px rgba(0, 0, 0, 0.2)' : 
    '0 4px 6px rgba(0, 0, 0, 0.1)'
  };
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`;

const AppTitle = styled.h1`
  font-size: 3rem;
  color: var(--text-color);
  margin: 0 0 1rem 0;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AppDescription = styled.p`
  font-size: 1.2rem;
  color: var(--light-text);
  line-height: 1.6;
  margin: 0;
  opacity: ${props => props.isDarkMode ? '0.9' : '1'};
`;

const AppContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MainContent = styled.div``;

const Sidebar = styled.div``;

const LongDescription = styled.div`
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.5)' : 
    'rgba(0, 0, 0, 0.03)'
  };
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  
  h3 {
    color: var(--text-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--light-text);
    opacity: ${props => props.isDarkMode ? '0.9' : '1'};
  }
`;

const FeaturesSection = styled.div`
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.5)' : 
    'rgba(0, 0, 0, 0.03)'
  };
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;

  h3 {
    color: var(--text-color);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--light-text);
  opacity: ${props => props.isDarkMode ? '0.9' : '1'};
  
  &:before {
    content: "•";
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 0.75rem;
    font-size: 1.2rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const AppLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: white;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: var(--hover-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(184, 134, 11, 0.3);
  }
`;

const AppPage = () => {
  const { appId } = useParams();
  const { isDarkMode } = useTheme();
  
  const app = apps.find(a => a.id === appId);
  
  // If app doesn't exist or is coming soon, redirect to home
  if (!app || app.status === 'coming-soon') {
    return <Navigate to="/" replace />;
  }

  return (
    <AppPageContainer>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BackButton to="/">
            <FaArrowLeft /> Back to Home
          </BackButton>
          
          <AppHeader>
            <AppLogo isDarkMode={isDarkMode}>
              <img 
                src={app.logo} 
                alt={`${app.title} Logo`} 
                onError={(e) => {
                  e.target.style.display = 'none';
                }} 
              />
            </AppLogo>
            <div>
              <AppTitle>{app.title}</AppTitle>
              <AppDescription isDarkMode={isDarkMode}>
                {app.description}
              </AppDescription>
            </div>
          </AppHeader>

          <AppContent>
            <MainContent>
              <LongDescription isDarkMode={isDarkMode}>
                <h3>About {app.title}</h3>
                <p>{app.longDescription}</p>
              </LongDescription>
              
              <FeaturesSection isDarkMode={isDarkMode}>
                <h3>Key Features</h3>
                <FeatureList>
                  {app.features.map((feature, index) => (
                    <FeatureItem key={index} isDarkMode={isDarkMode}>
                      {feature}
                    </FeatureItem>
                  ))}
                </FeatureList>
              </FeaturesSection>
            </MainContent>
            
            <Sidebar>
              {app.url && (
                <AppLink 
                  href={app.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit {app.title} <FaExternalLinkAlt />
                </AppLink>
              )}
            </Sidebar>
          </AppContent>
        </motion.div>
      </Container>
    </AppPageContainer>
  );
};

export default AppPage; 