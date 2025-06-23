import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FaShieldAlt, FaFileContract, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import apps from '../../data/apps';
import Container from '../layout/Container';

const AppPageContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding-top: 120px;
  padding-bottom: 80px;
  background: var(--background);
`;

const AppHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const AppLogo = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.5)' : 
    'rgba(255, 255, 255, 0.5)'
  };
  border-radius: 15px;
  padding: 0;
  box-shadow: ${props => props.isDarkMode ? 
    '0 4px 6px rgba(0, 0, 0, 0.2)' : 
    '0 4px 6px rgba(0, 0, 0, 0.1)'
  };
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

const AppInfo = styled.div`
  flex: 1;
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
  margin: 0 0 1.5rem 0;
  opacity: ${props => props.isDarkMode ? '0.9' : '1'};
`;

const PolicyButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PolicyButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.8)' : 
    'rgba(255, 255, 255, 0.8)'
  };
  color: var(--text-color);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  border: 1px solid ${props => props.isDarkMode ? 
    'rgba(255, 255, 255, 0.1)' : 
    'rgba(0, 0, 0, 0.1)'
  };
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-size: 0.9rem;
  
  &:hover {
    background: ${props => props.isDarkMode ? 
      'rgba(45, 52, 54, 0.95)' : 
      'rgba(255, 255, 255, 0.95)'
    };
    transform: translateY(-2px);
    box-shadow: ${props => props.isDarkMode ? 
      '0 4px 12px rgba(0, 0, 0, 0.3)' : 
      '0 4px 12px rgba(0, 0, 0, 0.15)'
    };
  }
  
  svg {
    font-size: 0.8rem;
  }
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

const Sidebar = styled.div`
  position: relative;
`;

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

const StickyVideoContainer = styled.div`
  position: sticky;
  top: 100px;
  width: 100%;
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.5)' : 
    'rgba(0, 0, 0, 0.03)'
  };
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.isDarkMode ? 
    'rgba(255, 255, 255, 0.1)' : 
    'rgba(0, 0, 0, 0.05)'
  };
  
  @media (max-width: 768px) {
    position: relative;
    top: auto;
  }
  
  video {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 8px;
  }
`;

const VideoPlaceholder = styled.div`
  width: 100%;
  max-width: 300px;
  height: 400px;
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.8)' : 
    'rgba(0, 0, 0, 0.1)'
  };
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-text);
  font-size: 1rem;
  text-align: center;
  border: 2px dashed ${props => props.isDarkMode ? 
    'rgba(255, 255, 255, 0.2)' : 
    'rgba(0, 0, 0, 0.2)'
  };
  
  div {
    p {
      margin: 0.5rem 0;
      font-weight: 500;
    }
    
    p:first-of-type {
      font-size: 1.1rem;
      color: var(--primary-color);
    }
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
            <AppInfo>
              <AppTitle>{app.title}</AppTitle>
              <AppDescription isDarkMode={isDarkMode}>
                {app.description}
              </AppDescription>
              <PolicyButtons>
                <PolicyButton 
                  to={`/apps/${app.id}/privacy-policy`}
                  isDarkMode={isDarkMode}
                >
                  <FaShieldAlt />
                  Privacy Policy
                </PolicyButton>
                <PolicyButton 
                  to={`/apps/${app.id}/terms-of-service`}
                  isDarkMode={isDarkMode}
                >
                  <FaFileContract />
                  Terms of Service
                </PolicyButton>
                {app.url && (
                  <PolicyButton 
                    as="a"
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    isDarkMode={isDarkMode}
                  >
                    <FaExternalLinkAlt />
                    Visit App
                  </PolicyButton>
                )}
              </PolicyButtons>
            </AppInfo>
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
              <StickyVideoContainer isDarkMode={isDarkMode}>
                {app.videoUrl ? (
                  <video 
                    controls 
                    poster={app.videoPoster}
                    preload="metadata"
                  >
                    <source src={app.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <VideoPlaceholder isDarkMode={isDarkMode}>
                    <div>
                      <p>Demo Video</p>
                      <p>Coming Soon</p>
                    </div>
                  </VideoPlaceholder>
                )}
              </StickyVideoContainer>
            </Sidebar>
          </AppContent>
        </motion.div>
      </Container>
    </AppPageContainer>
  );
};

export default AppPage; 