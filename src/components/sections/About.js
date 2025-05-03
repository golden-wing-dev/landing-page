import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import { useTheme } from '../../context/ThemeContext';

const AboutSection = styled.section`
  padding: 100px 0;
  background: var(--background);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.isDarkMode ? 
      'radial-gradient(circle at 30% 50%, rgba(9, 132, 227, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(0, 184, 148, 0.05) 0%, transparent 50%)' :
      'radial-gradient(circle at 30% 50%, rgba(9, 132, 227, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(0, 184, 148, 0.1) 0%, transparent 50%)'
    };
    pointer-events: none;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 60%;
      height: 3px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      border-radius: 2px;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--light-text);
    margin-bottom: 1.5rem;
    opacity: ${props => props.isDarkMode ? '0.9' : '1'};
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: ${props => props.isDarkMode ? 
    '0 10px 30px rgba(0, 0, 0, 0.3)' : 
    '0 10px 30px rgba(0, 0, 0, 0.1)'
  };
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.isDarkMode ? 
      'linear-gradient(180deg, rgba(9, 132, 227, 0.1) 0%, rgba(0, 184, 148, 0.1) 100%)' :
      'linear-gradient(180deg, rgba(9, 132, 227, 0.05) 0%, rgba(0, 184, 148, 0.05) 100%)'
    };
    z-index: 1;
    pointer-events: none;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    filter: ${props => props.isDarkMode ? 'brightness(0.8)' : 'none'};
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: ${props => props.isDarkMode ? 'brightness(0.9)' : 'brightness(1.05)'};
  }
`;

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <AboutSection id="about" isDarkMode={isDarkMode}>
      <Container>
        <AboutContent>
          <AboutText isDarkMode={isDarkMode}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Seagull Technologies
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Seagull Technologies is a forward-thinking AI app development agency founded with a vision to create innovative mobile applications that leverage cutting-edge artificial intelligence to solve real-world problems.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our team of experienced developers, designers, and AI specialists work together to build user-friendly applications that deliver exceptional value to our clients and end-users.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We believe in the power of AI to transform industries and enhance human experiences. Our mission is to make AI accessible and practical through beautifully designed mobile applications.
            </motion.p>
          </AboutText>
          <AboutImage
            isDarkMode={isDarkMode}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/seagulltech.png"
              alt="Seagull Technologies Team"
            />
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About; 