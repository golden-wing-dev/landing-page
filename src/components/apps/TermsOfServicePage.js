import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useParams, Navigate, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import apps from '../../data/apps';
import Container from '../layout/Container';

const PolicyPageContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding-top: 120px;
  padding-bottom: 80px;
  background: var(--background);
`;

const ReturnButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    color: var(--hover-color);
    transform: translateX(-5px);
  }
  
  svg {
    font-size: 0.9rem;
  }
`;

const PolicyHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const AppIconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const AppIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.5)' : 
    'rgba(255, 255, 255, 0.8)'
  };
  border-radius: 12px;
  padding: 0;
  box-shadow: ${props => props.isDarkMode ? 
    '0 4px 12px rgba(0, 0, 0, 0.3)' : 
    '0 4px 12px rgba(0, 0, 0, 0.15)'
  };
  overflow: hidden;
  border: 1px solid ${props => props.isDarkMode ? 
    'rgba(255, 255, 255, 0.1)' : 
    'rgba(0, 0, 0, 0.05)'
  };
  backdrop-filter: blur(10px);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const AppTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const PolicyTitle = styled.h2`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-weight: 500;
`;

const PolicyContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.5)' : 
    'rgba(255, 255, 255, 0.8)'
  };
  padding: 3rem;
  border-radius: 15px;
  box-shadow: ${props => props.isDarkMode ? 
    '0 8px 32px rgba(0, 0, 0, 0.3)' : 
    '0 8px 32px rgba(0, 0, 0, 0.1)'
  };
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.isDarkMode ? 
    'rgba(255, 255, 255, 0.1)' : 
    'rgba(0, 0, 0, 0.05)'
  };
`;

const Section = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    color: var(--text-color);
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--light-text);
    margin-bottom: 1rem;
    opacity: ${props => props.isDarkMode ? '0.9' : '1'};
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    font-size: 1.1rem;
    color: var(--light-text);
    opacity: ${props => props.isDarkMode ? '0.9' : '1'};
    margin-bottom: 0.8rem;
    padding-left: 1.2rem;
    position: relative;
    line-height: 1.6;
    
    &:before {
      content: "•";
      color: var(--primary-color);
      font-weight: bold;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

const LastUpdated = styled.p`
  font-size: 0.9rem;
  color: var(--light-text);
  opacity: 0.7;
  text-align: center;
  margin-top: 2rem;
  font-style: italic;
`;

const TermsOfServicePage = () => {
  const { appId } = useParams();
  const { isDarkMode } = useTheme();
  
  const app = apps.find(a => a.id === appId);
  
  if (!app || app.status === 'coming-soon') {
    return <Navigate to="/" replace />;
  }

  return (
    <PolicyPageContainer>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ReturnButton to={`/apps/${app.id}`}>
            <FaArrowLeft /> Return to {app.title}
          </ReturnButton>

          <PolicyHeader>
            <AppIconContainer>
              <AppIcon isDarkMode={isDarkMode}>
                <img 
                  src={app.logo} 
                  alt={`${app.title} Logo`} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }} 
                />
              </AppIcon>
            </AppIconContainer>
            <AppTitle>{app.title}</AppTitle>
            <PolicyTitle>Terms of Service</PolicyTitle>
          </PolicyHeader>

          <PolicyContent isDarkMode={isDarkMode}>
            <Section isDarkMode={isDarkMode}>
              <h3>Agreement to Terms</h3>
              <p>
                By accessing and using {app.title}, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>Eligibility</h3>
              <p>To use our service, you must meet the following eligibility requirements:</p>
              <ul>
                <li>You must be at least 13 years old to use this service</li>
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You must not have been previously banned from using our services</li>
                <li>You must comply with all applicable laws and regulations</li>
              </ul>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>User Responsibilities</h3>
              <p>As a user of {app.title}, you agree to:</p>
              <ul>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the service only for lawful purposes</li>
                <li>Not interfere with or disrupt the service or servers</li>
                <li>Not attempt to gain unauthorized access to any part of the service</li>
                <li>Not upload or transmit viruses or other harmful code</li>
                <li>Respect the intellectual property rights of others</li>
              </ul>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>Service Availability</h3>
              <p>We strive to provide consistent service availability, however:</p>
              <ul>
                <li>We do not guarantee uninterrupted access to our services</li>
                <li>Scheduled maintenance may temporarily limit access</li>
                <li>We reserve the right to modify or discontinue the service at any time</li>
                <li>Service may be limited or unavailable in certain geographic regions</li>
              </ul>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>Intellectual Property</h3>
              <p>All content and materials available through {app.title} are protected by intellectual property rights:</p>
              <ul>
                <li>The service and its original content are owned by Seagull Technologies</li>
                <li>You may not reproduce, distribute, or create derivative works without permission</li>
                <li>You retain rights to content you create and share through our service</li>
                <li>You grant us license to use your content as necessary to provide our service</li>
              </ul>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>Limitation of Liability</h3>
              <p>To the fullest extent permitted by applicable law:</p>
              <ul>
                <li>We are not liable for any indirect, incidental, or consequential damages</li>
                <li>Our total liability shall not exceed the amount paid by you for the service</li>
                <li>We make no warranties about the accuracy or completeness of our service</li>
                <li>You use our service at your own risk</li>
              </ul>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>Termination</h3>
              <p>This agreement may be terminated:</p>
              <ul>
                <li>By you at any time by discontinuing use of the service</li>
                <li>By us if you violate these terms</li>
                <li>By us with or without notice at our sole discretion</li>
                <li>Upon termination, your right to use the service ceases immediately</li>
              </ul>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>Dispute Resolution</h3>
              <p>
                Any disputes arising from these terms or your use of {app.title} will be resolved through binding arbitration 
                in accordance with the rules of the American Arbitration Association.
              </p>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>Contact Information</h3>
              <p>
                If you have any questions about these Terms of Service, please contact us at legal@seagulltechnologies.com
              </p>
            </Section>

            <LastUpdated isDarkMode={isDarkMode}>
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </LastUpdated>
          </PolicyContent>
        </motion.div>
      </Container>
    </PolicyPageContainer>
  );
};

export default TermsOfServicePage; 