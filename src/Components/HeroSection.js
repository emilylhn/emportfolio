import React from 'react';
import styled from 'styled-components';
import backgroundimage from '../images/backgroundimage.jpg'

const HeroSectionStyle = styled.section`
  background-image: linear-gradient(to bottom, transparent, #FAC9B6), url(${backgroundimage});
  background-size: cover;
  background-position: center;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Title = styled.h1`
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-weight: normal;
  color: #02776F;
  font-size: 5rem;

@media screen and (max-width: 768px) {
  font-size: 4rem; 
}

@media screen and (max-width: 480px) {
  font-size: 3rem;
}
`;

const Tagline = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #02776F;
  font-size: x-large;
`;

const HeroSection = () => {
    return (
      <HeroSectionStyle>
        <Title>Emily Lawhorn</Title>
        <Tagline>is always making something.</Tagline>
      </HeroSectionStyle>
    );
  };

  export default HeroSection;