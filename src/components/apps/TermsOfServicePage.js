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
                {app.id === 'threemonths' && (
                  <>
                    <li>Set realistic and achievable goals that are legal and ethical</li>
                    <li>Take personal responsibility for your goal-setting journey and outcomes</li>
                    <li>Use the app's recommendations as guidance, not as guaranteed results</li>
                    <li>Not input goals that involve illegal activities or harm to others</li>
                  </>
                )}
                {app.id === 'album-ai' && (
                  <>
                    <li>Only upload photos that you own or have permission to use</li>
                    <li>Not upload images containing illegal, harmful, or inappropriate content</li>
                    <li>Respect copyright and intellectual property rights when sharing albums</li>
                    <li>Not use the service to create images that could mislead or deceive others</li>
                    <li>Take responsibility for how you share and distribute created albums</li>
                  </>
                )}
                {app.id === 'class-ai' && (
                  <>
                    <li>Use the guidance provided for self-improvement and personal refinement only</li>
                    <li>Apply social skills and etiquette lessons with cultural sensitivity and respect</li>
                    <li>Not use the app to misrepresent yourself or engage in deceptive social behavior</li>
                    <li>Respect that elegance and class come from authentic personal development</li>
                    <li>Take personal responsibility for your social interactions and behavior</li>
                    <li>Understand that social acceptance depends on genuine character, not just learned behaviors</li>
                  </>
                )}
                {app.id === 'cuddlr' && (
                  <>
                    <li>Use the app for legitimate baby care and parenting purposes only</li>
                    <li>Provide accurate and truthful information about your baby's health and development</li>
                    <li>Not use the app to replace professional medical advice when needed</li>
                    <li>Take responsibility for your baby's care decisions and consult healthcare professionals when appropriate</li>
                    <li>Only upload photos of your own baby or babies you have permission to document</li>
                    <li>Use AI guidance as supportive information, not as a substitute for professional medical care</li>
                    <li>Respect your baby's privacy and only share information you're comfortable with</li>
                  </>
                )}
              </ul>
            </Section>

            {app.id === 'threemonths' && (
              <Section isDarkMode={isDarkMode}>
                <h3>Goal-Setting Disclaimer</h3>
                <p>Important information about using {app.title} for goal achievement:</p>
                <ul>
                  <li>The app provides suggestions and guidance, but success depends on your personal effort and commitment</li>
                  <li>We do not guarantee that you will achieve your goals within the specified timeframe</li>
                  <li>Individual results may vary based on personal circumstances, effort, and external factors</li>
                  <li>The app is not a substitute for professional advice in health, finance, career, or other specialized areas</li>
                  <li>You should consult relevant professionals for goals requiring expert guidance</li>
                  <li>We are not responsible for decisions you make based on the app's recommendations</li>
                </ul>
              </Section>
            )}

            {app.id === 'album-ai' && (
              <Section isDarkMode={isDarkMode}>
                <h3>AI Photo Processing Disclaimer</h3>
                <p>Important information about using {app.title} for photo transformation:</p>
                <ul>
                  <li>AI transformation results may vary in quality and accuracy depending on input image quality</li>
                  <li>We do not guarantee perfect reproduction or transformation of your images</li>
                  <li>The artistic styles are AI-generated interpretations and may not match exact artistic techniques</li>
                  <li>Processing times may vary based on image complexity and server capacity</li>
                  <li>Some uploaded images may not be suitable for certain transformation styles</li>
                  <li>You are responsible for ensuring you have rights to all images you upload and transform</li>
                  <li>We are not liable for any issues arising from transformed images you create or share</li>
                </ul>
              </Section>
            )}

            {app.id === 'class-ai' && (
              <Section isDarkMode={isDarkMode}>
                <h3>Social Refinement and Coaching Disclaimer</h3>
                <p>Important information about using {app.title} for social and behavioral development:</p>
                <ul>
                  <li>Social skills and etiquette guidance are educational tools, not guarantees of social acceptance</li>
                  <li>Individual results may vary significantly based on personal effort, authenticity, and social context</li>
                  <li>The app provides general refinement principles that may not apply to all cultural or social situations</li>
                  <li>True elegance and class come from genuine character development, not just learned behaviors</li>
                  <li>We do not guarantee entry into specific social circles or communities</li>
                  <li>Social acceptance depends on many factors beyond etiquette and manners</li>
                  <li>The app is not a substitute for professional social coaching or cultural consultation</li>
                  <li>You are responsible for applying social guidance appropriately and respectfully in your context</li>
                </ul>
              </Section>
            )}

            {app.id === 'cuddlr' && (
              <Section isDarkMode={isDarkMode}>
                <h3>Baby Care and Medical Disclaimer</h3>
                <p>Important information about using {app.title} for baby care and parenting:</p>
                <ul>
                  <li>The app provides general baby care guidance and information, not medical advice</li>
                  <li>AI recommendations are educational tools and should not replace professional medical consultation</li>
                  <li>Individual baby development varies significantly - consult healthcare professionals for medical concerns</li>
                  <li>We do not guarantee specific health outcomes or development milestones</li>
                  <li>The app is not a substitute for regular pediatric care or emergency medical attention</li>
                  <li>Always consult qualified healthcare professionals for medical decisions about your baby</li>
                  <li>Emergency situations require immediate professional medical attention, not app guidance</li>
                  <li>You are responsible for making appropriate healthcare decisions for your baby</li>
                  <li>Growth and development tracking is for informational purposes and should be discussed with your pediatrician</li>
                  <li>Feeding and sleep recommendations should be adapted to your baby's individual needs and medical advice</li>
                </ul>
              </Section>
            )}

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
                {app.id === 'threemonths' && (
                  <>
                    <li>Your personal goals and progress data remain your intellectual property</li>
                    <li>We only use your goal data to provide personalized recommendations to you</li>
                    <li>We may use anonymized, aggregated data to improve the service for all users</li>
                    <li>You can request deletion of all your goal and progress data at any time</li>
                  </>
                )}
                {app.id === 'album-ai' && (
                  <>
                    <li>You retain full ownership and copyright of your original uploaded photos</li>
                    <li>You own the AI-transformed versions of your photos created through our service</li>
                    <li>We do not claim ownership of your photos or transformed images</li>
                    <li>You grant us temporary license to process your photos solely for transformation purposes</li>
                    <li>You are responsible for ensuring you have rights to upload and transform all images</li>
                    <li>You can delete your photos and albums at any time, removing our processing license</li>
                  </>
                )}
                {app.id === 'class-ai' && (
                  <>
                    <li>Your personal refinement journey and progress data remain your property</li>
                    <li>We retain ownership of our educational content, coaching methodologies, and etiquette curricula</li>
                    <li>You may use learned skills and knowledge for personal development and social interactions</li>
                    <li>We do not claim ownership of your behavioral improvements or social achievements</li>
                    <li>You can export your learning progress and coaching history at any time</li>
                    <li>Coaching content and methodologies are proprietary and protected by intellectual property laws</li>
                  </>
                )}
                {app.id === 'cuddlr' && (
                  <>
                    <li>You retain full ownership of all baby photos, videos, and personal family content you upload</li>
                    <li>Your baby's health data, growth records, and care history remain your property</li>
                    <li>We retain ownership of our AI baby care guidance system and educational content</li>
                    <li>You can export all your baby's data, photos, and care records at any time</li>
                    <li>We do not claim ownership of your baby's personal information or family data</li>
                    <li>Baby care methodologies and AI guidance systems are proprietary and protected</li>
                    <li>You grant us temporary license to process your baby's data solely for providing personalized care guidance</li>
                    <li>You can delete all baby data at any time, removing our processing license</li>
                  </>
                )}
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