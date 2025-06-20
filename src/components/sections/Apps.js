import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import AppCard from '../apps/AppCard';
import apps from '../../data/apps';

const AppsSection = styled.section`
  padding: 100px 0;
  background: var(--light-background);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 20px;
`;

const Apps = () => {
  return (
    <AppsSection id="apps">
      <Container>
        <SectionTitle>Our AI Apps</SectionTitle>
        <AppGrid>
          {apps.map((app, index) => (
            <AppCard
              key={app.id}
              app={app}
              index={index}
            />
          ))}
        </AppGrid>
      </Container>
    </AppsSection>
  );
};

export default Apps; 