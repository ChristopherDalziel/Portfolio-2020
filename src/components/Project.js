import React from "react";
import styled from "@emotion/styled";

const ProjectContainer = styled.div`
  border: solid 1px black;
  height: 25%
  width: 75%;
  padding: 50px;
  margin: 15px
`;

const ProjectImage = styled.img`
  height: 25%;
`;

const Project = ({ name, description, technology, url }) => (
  <ProjectContainer>
    <p>{name}</p>
    <p>{description}</p>
    <p>{technology}</p>
    <img height="250px" src={url} alt="related to project name" />
  </ProjectContainer>
);

export default Project;
