import React from 'react';
import styled from 'styled-components';
import ProjectImage1 from '../images/zamboni2.PNG'; 
import ProjectImage2 from '../images/cookiegame.PNG';


const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 40px;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Project = styled.a`
  flex: 0 0 calc(50% - 20px); 
  margin-bottom: 10px; 
  position: relative;
  cursor: pointer;
  width: 45%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  margin-right: 20px;

  &:before {
    content: attr(data-title);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    color: #02776F;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s;
    /* padding-left: 10px;
    padding-right: 40px; */
  }

  &:hover::before {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 calc(100% - 40px); 
    margin-right: 0; 
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
`;

const ProjectsTitle = styled.h2`
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-weight: normal;
  color: #02776f;
  font-size: 3rem;
  margin-bottom: 20px;
  margin-left: 15%;
  margin-top: 40px;
`;

const ProjectsSection = () => {
  return (
    <div>
    <ProjectsTitle>Projects</ProjectsTitle>
    <ProjectsContainer>
      <Project href="https://github.com/emilylhn/projectzamboni" data-title="Zamboni Vibes was a fun browser game that uses OOP. Keep the zamboni driver employed by not running over the hockey players.">
        <ProjectImage src={ProjectImage1} alt="Zamboni Vibes image includes cartoon ice rink, zamboni and hockey players" />
      </Project>
      <Project href="https://github.com/emilylhn/cookiegame" data-title="Cookie Clicker was an idle game made using React.">
        <ProjectImage src={ProjectImage2} alt="Cookie Clicker game image" />
      </Project>
    </ProjectsContainer>
    </div>
  );
};

export default ProjectsSection;
