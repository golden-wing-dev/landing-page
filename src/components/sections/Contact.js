import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Container from '../layout/Container';
import { useTheme } from '../../context/ThemeContext';

const ContactSection = styled.section`
  padding: 100px 0;
  background: var(--background);
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--light-text);
    margin-bottom: 2rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-right: 1rem;
  }

  span {
    font-size: 1.1rem;
    color: var(--text-color);
  }
`;

const ContactForm = styled.form`
  background: var(--card-background);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${props => props.isDarkMode ? 
    '0 4px 6px rgba(0, 0, 0, 0.2)' : 
    '0 4px 6px rgba(0, 0, 0, 0.1)'
  };
  border: 1px solid var(--border-color);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: ${props => props.isDarkMode ? 'rgba(45, 52, 54, 0.5)' : 'white'};
  color: var(--text-color);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px ${props => props.isDarkMode ? 
      'rgba(9, 132, 227, 0.2)' : 
      'rgba(9, 132, 227, 0.1)'
    };
  }

  &::placeholder {
    color: var(--light-text);
    opacity: 0.7;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  background: ${props => props.isDarkMode ? 'rgba(45, 52, 54, 0.5)' : 'white'};
  color: var(--text-color);
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px ${props => props.isDarkMode ? 
      'rgba(9, 132, 227, 0.2)' : 
      'rgba(9, 132, 227, 0.1)'
    };
  }

  &::placeholder {
    color: var(--light-text);
    opacity: 0.7;
  }
`;

const SubmitButton = styled.button`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: var(--hover-color);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background-color: ${props => props.isDarkMode ? 
    'rgba(0, 184, 148, 0.1)' : 
    '#d4edda'
  };
  color: ${props => props.isDarkMode ? 
    '#00b894' : 
    '#155724'
  };
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  border: 1px solid ${props => props.isDarkMode ? 
    'rgba(0, 184, 148, 0.2)' : 
    '#c3e6cb'
  };
`;

const ErrorMessage = styled.div`
  background-color: ${props => props.isDarkMode ? 
    'rgba(255, 82, 82, 0.1)' : 
    '#f8d7da'
  };
  color: ${props => props.isDarkMode ? 
    '#ff5252' : 
    '#721c24'
  };
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  border: 1px solid ${props => props.isDarkMode ? 
    'rgba(255, 82, 82, 0.2)' : 
    '#f5c6cb'
  };
`;

const Contact = ({ handleSubmit }) => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ submitting: false, success: false, error: error.message });
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <ContactContent>
          <ContactInfo>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Have a project in mind or want to learn more about our AI app development services? We'd love to hear from you. Reach out to us using the contact form or our contact information below.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ContactItem>
                <FaEnvelope />
                <span>main@seagulltechnology.com</span>
              </ContactItem>
              {/* <ContactItem>
                <FaPhone />
                <span>+1 (555) 123-4567</span>
              </ContactItem>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </ContactItem> */}
            </motion.div>
          </ContactInfo>
          <ContactForm onSubmit={handleFormSubmit} isDarkMode={isDarkMode}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {status.success && (
                <SuccessMessage isDarkMode={isDarkMode}>
                  Thank you for your message! We'll get back to you soon.
                </SuccessMessage>
              )}
              {status.error && (
                <ErrorMessage isDarkMode={isDarkMode}>
                  {status.error}
                </ErrorMessage>
              )}
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  isDarkMode={isDarkMode}
                  placeholder="Your name"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  isDarkMode={isDarkMode}
                  placeholder="Your email address"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                  isDarkMode={isDarkMode}
                  placeholder="Message subject"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  isDarkMode={isDarkMode}
                  placeholder="Your message"
                ></TextArea>
              </FormGroup>
              <SubmitButton 
                type="submit" 
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </motion.div>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact; 