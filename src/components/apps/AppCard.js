import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const AppCardContainer = styled(motion.div)`
  background: var(--card-background);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${props => props.isDarkMode ? 
    '0 4px 6px rgba(0, 0, 0, 0.2)' : 
    '0 4px 6px rgba(0, 0, 0, 0.1)'
  };
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid var(--border-color);

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.isDarkMode ? 
      '0 10px 20px rgba(0, 0, 0, 0.3)' : 
      '0 10px 20px rgba(0, 0, 0, 0.15)'
    };
  }
`;

const AppLogo = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.5)' : 
    'rgba(255, 255, 255, 0.5)'
  };
  border-radius: 15px;
  padding: 0.5rem;
  transition: transform 0.3s ease;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const AppIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: ${props => props.hide ? 'none' : 'block'};
  text-align: center;
`;

const AppTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  font-weight: 600;
  text-align: center;
`;

const AppDescription = styled.p`
  color: var(--light-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: ${props => props.isDarkMode ? '0.9' : '1'};
  text-align: justify;
  hyphens: auto;
`;

const AppLink = styled.a`
  display: block;
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  text-align: center;

  &:hover {
    background: var(--hover-color);
    transform: translateY(-2px);
  }
`;

const AppCard = ({ app, index, openModal }) => {
  const { isDarkMode } = useTheme();

  return (
    <AppCardContainer
      isDarkMode={isDarkMode}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      onClick={() => app.url && window.open(app.url, '_blank')}
      style={{ opacity: app.id.includes('coming-soon') ? 0.7 : 1 }}
    >
      <AppLogo isDarkMode={isDarkMode}>
        <img 
          src={app.logo} 
          alt={`${app.title} Logo`} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentElement.querySelector('.fallback-icon').style.display = 'block';
          }} 
        />
        <AppIcon className="fallback-icon" hide={app.logo !== '/images/logos/coming-soon-logo.png'}>
          {app.icon}
        </AppIcon>
      </AppLogo>
      <AppTitle>{app.title}</AppTitle>
      <AppDescription isDarkMode={isDarkMode}>
        {app.description}
      </AppDescription>
      <AppLink 
        href={app.url || "#"} 
        onClick={(e) => openModal(e, app)}
        target={app.url ? "_blank" : undefined}
        rel={app.url ? "noopener noreferrer" : undefined}
      >
        Learn More
      </AppLink>
    </AppCardContainer>
  );
};

export default AppCard; 