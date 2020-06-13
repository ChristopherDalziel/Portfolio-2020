import React from "react";
import styled from "@emotion/styled";

const ProjectContainer = styled.div`
  border: solid 1px black;
  height: 25%;
  width: 75%;
`;

const Project = ({ name, description, technology, url }) => (
  <ProjectContainer>
    <h3>{name}</h3>
    <p>{description}</p>
    <br />
    <p>{technology}.</p>
    <img height="250px" src={url} alt="related to project name" />
  </ProjectContainer>
);

export default Project;
