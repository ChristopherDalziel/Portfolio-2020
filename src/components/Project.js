import React, { useState } from "react";
import styled from "@emotion/styled";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectContainer = styled.div`
  display: flex;
  flex-direct: row;
  width: 90%;
  margin: 10px;
`;

const ProjectInfoDisplay = styled.div`
  padding-top: 10px;
  margin-left: 10px;
`;

const GitHubLink = styled.a`
  color: #493a37;
  font-size: 40px;
  &:hover {
    color: #a8b7ab;
    -webkit-transition: color 0.3s ease-in-out;
    -moz-transition: color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
  }
`;

const Project = ({ name, description, technology, githubUrl, url }) => {
  const [projectInfoDisplayed, setProjectInfoDisplay] = useState(false);

  return (
    <ProjectContainer
      onMouseEnter={() => setProjectInfoDisplay(true)}
      onMouseLeave={() => setProjectInfoDisplay(false)}
    >
      <img width="650px" src={url} alt="related to project name" />{" "}
      {projectInfoDisplayed ? (
        <ProjectInfoDisplay>
          <h4>{name}</h4>
          <br />
          <h5>About the application:</h5>
          <p>{description}</p>
          <br />
          <h5>Technology Used:</h5>
          <p>{technology}.</p>
          <br />
          <h5>GitHub Repository Link:</h5>
          <GitHubLink target="_blank" href={githubUrl}>
            <FontAwesomeIcon icon={faGithubSquare} />
          </GitHubLink>
        </ProjectInfoDisplay>
      ) : null}
    </ProjectContainer>
  );
};

export default Project;
