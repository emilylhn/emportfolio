import React from 'react';
import styled from 'styled-components';
import profileImage from '../images/cestmoi2.png'; 

const AboutMeSection = styled.section`
  display: flex;
  align-items: center;
  background-color: #FAC9B6; 
  color: #02776F; 
  padding: 100px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 50px;
  }
`;

const AboutMeContent = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutMeTitle = styled.h2`
  font-family: 'Fraunces', serif; 
  font-weight: normal;
  color: #02776F;
  font-size: 3rem; 
  margin-right: 50px; 

  @media screen and (max-width: 768px) {
    margin-bottom: 20px; 
    margin-right: 0; 
    font-size: 2rem; 
  }
`;

const AboutMeParagraph = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem; 
  max-width: 800px; 
`;

const AboutMeImage = styled.img`
  max-width: 250px;
  margin-right: 50px;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: translate(5px, -5px);
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeSection>
      <AboutMeContent>
        <AboutMeImage src={profileImage} alt="photo of Emily" />
        <div>
          <AboutMeTitle>About Me</AboutMeTitle>
          <AboutMeParagraph>
            A native Cincinnatian living in Montreal, I've been a maker all my life, and it's a crucial part of my identity - from photography to modern hand embroidery and now to web development. I am always making something. I have a passion for all things sports, problem solving, the eccentric, and accessibility for anyone and everyone who might need it, no matter the need or disability. These are elements that I strive to bring to my work, no matter the medium.
          </AboutMeParagraph>
        </div>
      </AboutMeContent>
    </AboutMeSection>
  );
};

export default AboutMe;
