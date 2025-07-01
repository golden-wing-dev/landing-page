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

const PrivacyPolicyPage = () => {
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
            <PolicyTitle>Privacy Policy</PolicyTitle>
          </PolicyHeader>

          <PolicyContent isDarkMode={isDarkMode}>
            <Section isDarkMode={isDarkMode}>
              <h3>Introduction</h3>
              <p>
                We are committed to protecting your privacy and ensuring the security of your personal information. 
                This privacy policy outlines how we collect, use, and protect your data when you use {app.title}.
              </p>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>Information We Collect</h3>
              <p>We collect information to provide better services to our users. The types of information we collect include:</p>
              <ul>
                <li>Personal information you provide when creating an account</li>
                <li>Usage data to improve our services and user experience</li>
                <li>Device information for technical support and optimization</li>
                <li>Location data if explicitly permitted by you</li>
                {app.id === 'threemonths' && (
                  <>
                    <li>Goal and objective information you input into the app</li>
                    <li>Progress tracking data and completion metrics</li>
                    <li>Daily task and habit completion records</li>
                    <li>Personal preferences for goal-setting and scheduling</li>
                  </>
                )}
                {app.id === 'album-ai' && (
                  <>
                    <li>Photos and images you upload to the service</li>
                    <li>Metadata associated with your uploaded images (file size, format, etc.)</li>
                    <li>Album creation preferences and style selections</li>
                    <li>Sharing settings and activity for your created albums</li>
                    <li>AI processing results and transformed images</li>
                  </>
                )}
                {app.id === 'class-ai' && (
                  <>
                    <li>Learning progress and etiquette assessment results</li>
                    <li>Social situation preferences and refinement goals</li>
                    <li>Behavioral improvement tracking and milestone achievements</li>
                    <li>Cultural interests and sophistication preferences</li>
                    <li>Style and dress code preferences for guidance</li>
                    <li>Social challenge areas and coaching focus topics</li>
                  </>
                )}
              </ul>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>How We Use Your Information</h3>
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
                {app.id === 'threemonths' && (
                  <>
                    <li>To generate personalized daily tasks and recommendations for your goals</li>
                    <li>To track your progress and provide motivational insights</li>
                    <li>To optimize goal timelines and difficulty based on your completion patterns</li>
                    <li>To provide analytics about your goal achievement patterns (anonymized)</li>
                  </>
                )}
                {app.id === 'album-ai' && (
                  <>
                    <li>To process your uploaded photos using AI transformation algorithms</li>
                    <li>To generate artistic versions of your images in various styles</li>
                    <li>To create and compile albums from your transformed photos</li>
                    <li>To enable sharing functionality for your created albums</li>
                    <li>To improve our AI models and transformation quality (with explicit consent)</li>
                  </>
                )}
                {app.id === 'class-ai' && (
                  <>
                    <li>To provide personalized etiquette and refinement coaching</li>
                    <li>To assess your current sophistication level and create tailored lessons</li>
                    <li>To track your progress in developing elegant behaviors and social skills</li>
                    <li>To recommend appropriate cultural activities and social protocols</li>
                    <li>To generate personalized style and behavioral guidance</li>
                    <li>To provide situation-specific coaching for social scenarios</li>
                  </>
                )}
              </ul>
            </Section>

            {app.id === 'threemonths' && (
              <Section isDarkMode={isDarkMode}>
                <h3>Goal and Progress Data Protection</h3>
                <p>Your personal goals and progress data are treated with special care:</p>
                <ul>
                  <li>Goal content and progress data are encrypted both in transit and at rest</li>
                  <li>Your goals are never shared with third parties or used for advertising</li>
                  <li>We do not analyze individual goal content - only aggregated, anonymized patterns</li>
                  <li>You can export all your goal and progress data at any time</li>
                  <li>Deleting your account permanently removes all goal-related data</li>
                  <li>We use your progress data solely to improve your personal experience</li>
                </ul>
              </Section>
            )}

            {app.id === 'album-ai' && (
              <Section isDarkMode={isDarkMode}>
                <h3>Photo and Image Data Protection</h3>
                <p>Your uploaded photos and personal images receive the highest level of protection:</p>
                <ul>
                  <li>All uploaded photos are encrypted both during upload and storage</li>
                  <li>Your original and transformed images are never shared with third parties</li>
                  <li>Photos are automatically deleted from our servers after 30 days unless saved to your account</li>
                  <li>We do not use your personal photos to train AI models without explicit opt-in consent</li>
                  <li>You retain full ownership and copyright of your original and transformed images</li>
                  <li>Album sharing is controlled entirely by you - only people with your shared links can view albums</li>
                  <li>You can permanently delete all your photos and albums at any time</li>
                  <li>Facial recognition data is processed locally and never stored on our servers</li>
                </ul>
              </Section>
            )}

            {app.id === 'class-ai' && (
              <Section isDarkMode={isDarkMode}>
                <h3>Social and Behavioral Data Protection</h3>
                <p>Your refinement journey and social development data are treated with utmost confidentiality:</p>
                <ul>
                  <li>All learning progress and behavioral assessments are encrypted and securely stored</li>
                  <li>Your social preferences and refinement goals are never shared with third parties</li>
                  <li>Personal coaching sessions and progress tracking remain completely private</li>
                  <li>We do not analyze individual behavioral data for any purpose other than your coaching</li>
                  <li>Social situation assessments are used solely to improve your personal experience</li>
                  <li>You can export all your coaching data and progress history at any time</li>
                  <li>Deleting your account permanently removes all behavioral and social data</li>
                  <li>Cultural and lifestyle preferences are never used for marketing or advertising</li>
                </ul>
              </Section>
            )}

            <Section isDarkMode={isDarkMode}>
              <h3>Data Protection</h3>
              <p>We implement appropriate security measures to protect your personal information:</p>
              <ul>
                <li>Your data is encrypted and stored securely</li>
                <li>We use industry-standard security protocols</li>
                <li>Access to your data is limited to authorized personnel only</li>
                <li>Regular security audits and updates are performed</li>
                <li>We comply with GDPR and other applicable privacy regulations</li>
              </ul>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>Your Rights</h3>
              <p>You have the following rights regarding your personal data:</p>
              <ul>
                <li>The right to access your personal data</li>
                <li>The right to rectification of inaccurate data</li>
                <li>The right to erasure of your data</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>Third-Party Services</h3>
              <p>
                We do not share your personal information with third parties except as described in this policy. 
                We may use third-party services for analytics and crash reporting to improve our service quality.
              </p>
            </Section>

            <Section isDarkMode={isDarkMode}>
              <h3>Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@seagulltechnologies.com
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

export default PrivacyPolicyPage; 