import React, { useState } from "react";
import styled from "@emotion/styled";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 95vw;
  margin: 10px;
  margin-bottom: 17px;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-left: 20px;
  }
  @media (max-width: 815px) {
    flex-direction: column;
  }
`;

const ProjectInfoDisplay = styled.div`
  height: 100%;
  overflow: scroll;
  padding-top: 10px;
  margin-left: 10px;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 815px) {
    display: none;
  }
`;

const ProjectNameMobile = styled.h4`
  margin: 2px;
  @media (min-width: 1025px) {
    display: none;
  }
`;

const ProjectInfoDisplayMobile = styled.div`
  height: 100%;
  overflow: scroll;
  padding-top: 10px;
  margin-left: 10px;
  @media (min-width: 1025px) {
    display: none;
  }
  @media (max-width: 815px) {
    width: 100%;
    margin-left: 0;
  }
  @media (max-width: 700px) {
    width: 95%;
    margin-left: 0;
  }
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

const ProjectImage = styled.img`
  width: 650px;
  object-fit: cover;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 815px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    width: 95%;
  }
`;

const Project = ({ name, description, technology, githubUrl, url }) => {
  const [projectInfoDisplayed, setProjectInfoDisplay] = useState(false);

  return (
    <ProjectContainer
      onMouseEnter={() => setProjectInfoDisplay(true)}
      onMouseLeave={() => setProjectInfoDisplay(false)}
    >
      <ProjectNameMobile>{name}</ProjectNameMobile>
      <ProjectImage src={url} alt="related to project name" />{" "}
      {projectInfoDisplayed ? (
        <>
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
          <ProjectInfoDisplayMobile>
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
          </ProjectInfoDisplayMobile>
        </>
      ) : null}
    </ProjectContainer>
  );
};

export default Project;
