import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Container from '../layout/Container';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
  color: white;
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const Button = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: var(--primary-color);
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Hero = ({ scrollToSection }) => {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We Build AI Apps
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We specialize in developing consumer-facing AI mobile applications with enhanced user experience.
          </Subtitle>
          <Button
            href="#apps"
            onClick={(e) => scrollToSection(e, 'apps')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </Button>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero; 