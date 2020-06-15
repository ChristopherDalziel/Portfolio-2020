import React, { useState } from "react";
import styled from "@emotion/styled";

const ProjectContainer = styled.div`
  display: flex;
  flex-direct: row;

  margin: 10px;
`;

const ProjectInfoDisplay = styled.div`
  margin-left: 5px;
`;

const Project = ({ name, description, technology, url }) => {
  const [projectInfoDisplayed, setProjectInfoDisplay] = useState(false);

  return (
    <ProjectContainer>
      <img
        onMouseEnter={() => setProjectInfoDisplay(true)}
        onMouseLeave={() => setProjectInfoDisplay(false)}
        width="650px"
        src={url}
        alt="related to project name"
      />{" "}
      {projectInfoDisplayed ? (
        <ProjectInfoDisplay>
          <h4>{name}</h4>
          <br />
          <h5>About the application:</h5>
          <p>{description}</p>
          <br />
          <h5>Technology Used:</h5>
          <p>{technology}.</p>
        </ProjectInfoDisplay>
      ) : null}
    </ProjectContainer>
  );
};

export default Project;
