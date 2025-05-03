import React from 'react';
import styled from '@emotion/styled';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const HeaderContainer = styled.header`
  padding: 20px 0;
  position: fixed;
  width: 100%;
  top: 0;
  background: ${props => props.isDarkMode ? 
    'rgba(30, 39, 46, 0.95)' : 
    'rgba(255, 255, 255, 0.95)'
  };
  backdrop-filter: blur(5px);
  z-index: 1000;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      ${props => props.isDarkMode ? 
        'rgba(9, 132, 227, 0.15) 0%, rgba(0, 184, 148, 0.1) 30%, rgba(30, 39, 46, 0) 70%' :
        'rgba(9, 132, 227, 0.1) 0%, rgba(0, 184, 148, 0.05) 30%, rgba(255, 255, 255, 0) 70%'
      }
    );
    z-index: -1;
    animation: rotate 15s linear infinite;
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: var(--text-color);
  margin: 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  .nav-items {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    .nav-items {
      display: none;
    }
  }
`;

const NavLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--primary-color);
    
    &::after {
      transform: scaleX(1);
    }
  }
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--text-color);
  background: ${props => props.isDarkMode ? 
    'rgba(45, 52, 54, 0.8)' : 
    'rgba(255, 255, 255, 0.8)'
  };
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-left: 1rem;
  backdrop-filter: blur(5px);

  &:hover {
    transform: scale(1.1);
    color: var(--primary-color);
    background: ${props => props.isDarkMode ? 
      'rgba(45, 52, 54, 0.95)' : 
      'rgba(255, 255, 255, 0.95)'
    };
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Header = ({ scrollToSection }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <HeaderContainer isDarkMode={isDarkMode}>
      <Nav>
        <Logo>Seagull Technologies</Logo>
        <NavLinks>
          <div className="nav-items">
            <NavLink href="#apps" onClick={(e) => scrollToSection(e, 'apps')}>Our Apps</NavLink>
            <NavLink href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</NavLink>
            <NavLink href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</NavLink>
          </div>
          <ThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 