import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import Section from '../components/section';

const StyledContact = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  align-self: center;
  z-index: 5;
  padding: 100px 50px;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export default function Contact() {
  return (
    <Section title="kontakt">
      <StyledContact></StyledContact>
    </Section>
  );
}
