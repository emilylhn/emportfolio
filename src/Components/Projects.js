import React from 'react';
import styled from 'styled-components';
import ProjectImage1 from '../images/placeholder1.PNG'; 
import ProjectImage2 from '../images/placeholder2.PNG';


const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 40px;
`;

const Project = styled.a`
  flex: 0 0 calc(50% - 20px); 
  margin-bottom: 10px; 
  position: relative;
  cursor: pointer;
  width: 45%;
  display: flex;
  flex-direction: column;

  &:hover::before {
    content: attr(data-title);
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 5px;
    transition: opacity 0.3s;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
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
      <Project href="project1-link" data-title="Project 1 description">
        <ProjectImage src={ProjectImage1} alt="Project 1" />
      </Project>
      <Project href="project2-link" data-title="Project 2 description">
        <ProjectImage src={ProjectImage2} alt="Project 2" />
      </Project>
    </ProjectsContainer>
    </div>
  );
};

export default ProjectsSection;
