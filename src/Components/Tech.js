import React from 'react';
import styled from 'styled-components';
import HTML5Icon from '../images/html5.svg';
import CSS3Icon from '../images/css3.svg';
import ReactIcon from '../images/react.svg';
import NodeJSIcon from '../images/node-js.svg';
import JavaScriptIcon from '../images/square-js.svg';

const TechnologiesSectionStyle = styled.section`
padding-bottom: 70px;
background: linear-gradient(to bottom, #FAC9B6 2%, #FCCFA2 40%, #FAC9B6 98%);
`;

const TechnologiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechHead = styled.h2`
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-weight: normal;
  color: #02776F;
  font-size: 2em;
`;

const TechnologiesIcons = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 20px;
`;

const TechIcon = styled.img`
  width: 50px; 
  height: 50px; 
`;

const TechnologiesSection = () => {
  return (
    <TechnologiesSectionStyle>
      <TechnologiesWrapper>
        <TechHead>I have experience using</TechHead>
        <TechnologiesIcons>
          <TechIcon src={HTML5Icon} alt="HTML5 Icon" />
          <TechIcon src={CSS3Icon} alt="CSS3 Icon" />
          <TechIcon src={ReactIcon} alt="React Icon" />
          <TechIcon src={JavaScriptIcon} alt="JavaScript Icon" />
          <TechIcon src={NodeJSIcon} alt="NodeJS Icon" />
        </TechnologiesIcons>
      </TechnologiesWrapper>
    </TechnologiesSectionStyle>
  );
};

export default TechnologiesSection;

