import React from 'react';
import styled from 'styled-components';
import HeroSection from './Components/HeroSection'
import AboutMeSection from './Components/AboutMe';
import ContactSection from './Components/Contact';
import TechnologiesSection from './Components/Tech';
import ProjectsSection from './Components/Projects';
import NavigationBar from './Components/Navigation';
import GlobalStyles from './Components/GlobalStyles';
import './fonts.css' 

const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FAC9B6;
`;

const Section = styled.div`
`;

const App = () => {
  return (
    <>
    <GlobalStyles />
    <Page>
      <NavigationBar />
      <Section id="hero">
      <HeroSection />
      </Section>
      <Section id="about">
        <AboutMeSection />
      </Section>
      <Section id="technologies">
        <TechnologiesSection />
      </Section>
      <Section id="projects">
        <ProjectsSection />
      </Section>
      <Section id="contact">
        <ContactSection />
      </Section>
    </Page>
    </>
  );
};

export default App;
