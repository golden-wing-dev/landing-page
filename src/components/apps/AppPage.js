import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
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

const PolicySection = styled.div`
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
    font-size: 1rem;
    line-height: 1.6;
    color: var(--light-text);
    opacity: ${props => props.isDarkMode ? '0.9' : '1'};
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 1rem;
    color: var(--light-text);
    opacity: ${props => props.isDarkMode ? '0.9' : '1'};
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    position: relative;
    
    &:before {
      content: "•";
      color: var(--primary-color);
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const VideoContainer = styled.div`
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

              <PolicySection isDarkMode={isDarkMode}>
                <h3>Privacy Policy</h3>
                <p>
                  We are committed to protecting your privacy and ensuring the security of your personal information. 
                  This privacy policy outlines how we collect, use, and protect your data when you use {app.title}.
                </p>
                <ul>
                  <li>We collect only necessary information to provide our services</li>
                  <li>Your data is encrypted and stored securely</li>
                  <li>We do not share your personal information with third parties</li>
                  <li>You have control over your data and can request deletion at any time</li>
                  <li>We comply with GDPR and other applicable privacy regulations</li>
                </ul>
              </PolicySection>

              <PolicySection isDarkMode={isDarkMode}>
                <h3>Terms of Service</h3>
                <p>
                  By using {app.title}, you agree to comply with and be bound by the following terms and conditions. 
                  Please review these terms carefully before using our service.
                </p>
                <ul>
                  <li>You must be at least 13 years old to use this service</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You agree to use the service only for lawful purposes</li>
                  <li>We reserve the right to modify or discontinue the service at any time</li>
                  <li>These terms are subject to change with notice</li>
                  <li>Disputes will be resolved through binding arbitration</li>
                </ul>
              </PolicySection>
            </MainContent>
            
            <Sidebar>
              <VideoContainer isDarkMode={isDarkMode}>
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
              </VideoContainer>
            </Sidebar>
          </AppContent>
        </motion.div>
      </Container>
    </AppPageContainer>
  );
};

export default AppPage; 