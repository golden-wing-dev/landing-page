import React from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.isDarkMode ? 
    'rgba(0, 0, 0, 0.8)' : 
    'rgba(0, 0, 0, 0.7)'
  };
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled(motion.div)`
  background: var(--card-background);
  border-radius: 15px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 2rem;
  box-shadow: ${props => props.isDarkMode ? 
    '0 10px 30px rgba(0, 0, 0, 0.3)' : 
    '0 10px 30px rgba(0, 0, 0, 0.2)'
  };
  border: 1px solid var(--border-color);
  color: var(--text-color);

  /* Scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: ${props => props.isDarkMode ? 
    'var(--primary-color) rgba(45, 52, 54, 0.5)' : 
    'var(--primary-color) rgba(0, 0, 0, 0.1)'
  };

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.isDarkMode ? 
      'rgba(45, 52, 54, 0.5)' : 
      'rgba(0, 0, 0, 0.1)'
    };
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 4px;
    
    &:hover {
      background-color: var(--hover-color);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.8)' : 
    'rgba(255, 255, 255, 0.8)'
  };
  border: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: ${props => props.isDarkMode ? 
      'rgba(45, 52, 54, 0.95)' : 
      'rgba(255, 255, 255, 0.95)'
    };
    color: var(--primary-color);
    transform: scale(1.1);
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding-right: 2rem;
`;

const ModalLogo = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.5)' : 
    'rgba(255, 255, 255, 0.5)'
  };
  border-radius: 10px;
  padding: 0.5rem;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: var(--text-color);
  margin: 0;
  font-weight: 600;
`;

const ModalBody = styled.div`
  margin-bottom: 2rem;
`;

const ModalText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--light-text);
  margin-bottom: 2rem;
  opacity: ${props => props.isDarkMode ? '0.9' : '1'};
`;

const ModalFeatures = styled.div`
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.5)' : 
    'rgba(0, 0, 0, 0.03)'
  };
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;

  h3 {
    color: var(--text-color);
    margin-bottom: 1rem;
    font-size: 1.3rem;
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
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  color: var(--light-text);
  opacity: ${props => props.isDarkMode ? '0.9' : '1'};
  
  &:before {
    content: "•";
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 0.5rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
`;

const ModalButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--hover-color);
    transform: translateY(-2px);
  }
`;

const AppIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: ${props => props.hide ? 'none' : 'block'};
`;

const PrivacyPolicySection = styled.div`
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.95rem;
`;

const PrivacyPolicyTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const PrivacyPolicyText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--light-text);
  margin-bottom: 0.75rem;
  opacity: ${props => props.isDarkMode ? '0.9' : '1'};
  padding-left: 2.25rem;

  &.intro {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding-left: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const PrivacyPolicySectionTitle = styled.h4`
  font-size: 1.1rem;
  color: var(--text-color);
  margin: 1.75rem 0 0.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:before {
    content: attr(data-number);
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--primary-color);
    opacity: 0.9;
    min-width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.isDarkMode ? 'rgba(var(--primary-color-rgb), 0.1)' : 'rgba(var(--primary-color-rgb), 0.08)'};
    border-radius: 4px;
    padding: 0 0.4rem;
  }

  &:first-of-type {
    margin-top: 1rem;
  }
`;

const BulletList = styled.ul`
  list-style-type: none;
  padding-left: 3.25rem;
  margin: 0.25rem 0 1rem;
`;

const BulletPoint = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  color: var(--light-text);
  opacity: ${props => props.isDarkMode ? '0.9' : '1'};
  font-size: 0.95rem;
  line-height: 1.5;

  &:before {
    content: "•";
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 0.5rem;
    opacity: 0.8;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const BoldText = styled.span`
  font-weight: 600;
  color: var(--text-color);
  margin-right: 0.25rem;
`;

const TermsSection = styled.div`
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.95rem;
`;

const TermsTitle = styled(PrivacyPolicyTitle)``;

const TermsText = styled(PrivacyPolicyText)``;

const KeyPointsList = styled(BulletList)`
  padding-left: 1rem;
  margin-top: 1rem;
`;

const KeyPoint = styled(BulletPoint)`
  margin-bottom: 0.75rem;
`;

const AppModal = ({ isOpen, app, onClose }) => {
  const { isDarkMode } = useTheme();

  if (!app) return null;

  const renderPrivacyPolicy = () => {
    if (app.id !== 'dresscode') return null;

    return (
      <>
        <TermsSection>
          <TermsTitle>Terms of Service</TermsTitle>
          <TermsText isDarkMode={isDarkMode} className="intro">
            Last Updated: March 15, 2025
          </TermsText>
          
          <TermsText isDarkMode={isDarkMode} className="intro">
            Welcome to Dresscode! By using our service, you agree to our Terms of Service. Dresscode lets you share outfit images and receive AI-powered style ratings, all while keeping your content secure and private.
          </TermsText>
          
          <TermsText isDarkMode={isDarkMode}>
            <strong>Key Points:</strong>
          </TermsText>
          
          <KeyPointsList>
            <KeyPoint isDarkMode={isDarkMode}>
              <BoldText>Acceptance:</BoldText> Using Dresscode means you agree to these Terms.
            </KeyPoint>
            <KeyPoint isDarkMode={isDarkMode}>
              <BoldText>Privacy:</BoldText> Your images are stored securely and remain your property.
            </KeyPoint>
            <KeyPoint isDarkMode={isDarkMode}>
              <BoldText>AI Evaluations:</BoldText> Our AI provides style insights for informational purposes.
            </KeyPoint>
            <KeyPoint isDarkMode={isDarkMode}>
              <BoldText>Usage:</BoldText> Please keep your account secure and use the service responsibly.
            </KeyPoint>
          </KeyPointsList>
          
          <TermsText isDarkMode={isDarkMode}>
            For more details, please refer to our full Terms of Service.
          </TermsText>
        </TermsSection>

        <PrivacyPolicySection>
          <PrivacyPolicyTitle>Privacy Policy</PrivacyPolicyTitle>
          <PrivacyPolicyText isDarkMode={isDarkMode} className="intro">
            Last Updated: March 15, 2025
          </PrivacyPolicyText>
          
          <PrivacyPolicyText isDarkMode={isDarkMode} className="intro">
            At Dresscode, we prioritize your privacy and data security. This policy outlines how we handle your information while providing AI-powered style recommendations.
          </PrivacyPolicyText>
          
          <PrivacyPolicySectionTitle data-number="1" isDarkMode={isDarkMode}>Data Collection & Use</PrivacyPolicySectionTitle>
          <BulletList>
            <BulletPoint isDarkMode={isDarkMode}>
              <BoldText>Account Data:</BoldText> Basic information for account creation and management
            </BulletPoint>
            <BulletPoint isDarkMode={isDarkMode}>
              <BoldText>Images:</BoldText> Your outfit photos for style analysis
            </BulletPoint>
            <BulletPoint isDarkMode={isDarkMode}>
              <BoldText>Usage Data:</BoldText> App interactions to improve our service
            </BulletPoint>
          </BulletList>
          
          <PrivacyPolicySectionTitle data-number="2" isDarkMode={isDarkMode}>Security & Privacy</PrivacyPolicySectionTitle>
          <BulletList>
            <BulletPoint isDarkMode={isDarkMode}>
              <BoldText>Storage:</BoldText> All data is securely stored and encrypted
            </BulletPoint>
            <BulletPoint isDarkMode={isDarkMode}>
              <BoldText>Sharing:</BoldText> We never sell or share your data with third parties
            </BulletPoint>
            <BulletPoint isDarkMode={isDarkMode}>
              <BoldText>AI Processing:</BoldText> Style recommendations use OpenAI API securely
            </BulletPoint>
          </BulletList>
          
          <PrivacyPolicySectionTitle data-number="3" isDarkMode={isDarkMode}>Your Rights</PrivacyPolicySectionTitle>
          <BulletList>
            <BulletPoint isDarkMode={isDarkMode}>
              <BoldText>Control:</BoldText> Access, update, or delete your data anytime
            </BulletPoint>
            <BulletPoint isDarkMode={isDarkMode}>
              <BoldText>Ownership:</BoldText> You retain full rights to your uploaded content
            </BulletPoint>
            <BulletPoint isDarkMode={isDarkMode}>
              <BoldText>Age Restriction:</BoldText> Service not intended for users under 13
            </BulletPoint>
          </BulletList>
          
          <PrivacyPolicyText isDarkMode={isDarkMode}>
            We may update this policy as our service evolves. For questions about your privacy, please contact us.
          </PrivacyPolicyText>
        </PrivacyPolicySection>
      </>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          isDarkMode={isDarkMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            isDarkMode={isDarkMode}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} isDarkMode={isDarkMode}>
              <FaTimes />
            </CloseButton>
            
            <ModalHeader>
              <ModalLogo isDarkMode={isDarkMode}>
                <img 
                  src={app.logo} 
                  alt={`${app.title} Logo`} 
                  style={{ borderRadius: '10px' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.querySelector('.fallback-icon').style.display = 'block';
                  }} 
                />
                <div className="fallback-icon" style={{ display: app.logo === '/images/logos/coming-soon-logo.png' ? 'block' : 'none' }}>
                  {app.icon}
                </div>
              </ModalLogo>
              <ModalTitle>{app.title}</ModalTitle>
            </ModalHeader>
            
            <ModalBody>
              <ModalText isDarkMode={isDarkMode}>{app.longDescription}</ModalText>
              
              <ModalFeatures isDarkMode={isDarkMode}>
                <h3>Key Features</h3>
                <FeatureList>
                  {app.features.map((feature, index) => (
                    <FeatureItem key={index} isDarkMode={isDarkMode}>{feature}</FeatureItem>
                  ))}
                </FeatureList>
              </ModalFeatures>

              {renderPrivacyPolicy()}
            </ModalBody>
            
            <ModalFooter>
              {!app.url && (
                <ModalButton href="#contact">
                  Get Notified
                </ModalButton>
              )}
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default AppModal; 