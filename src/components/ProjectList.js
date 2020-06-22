import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import Project from "./Project";

import selectProjects from "../selector/projects";

const ProjectListContainer = styled.div`
  height: 77vh;
  width: 100vw;
  overflow: scroll;
  @media (max-width: 1024px) {
    height: 83.5vh;
  }
  @media (max-width: 815px) {
    height: 84vh;
  }
  @media (max-width: 700px) {
    height: 82vh;
    overflow-x: hidden;
  }
  @media (max-width: 600px) {
    height: 78vh;
  }
  @media (max-width: 500px) {
    height: 74vh;
  }
`;

const NoProjectsDisplay = styled.p`
  margin: 20px;
`;

export const ProjectList = (props) => (
  <ProjectListContainer>
    {props.projects.length === 0 ? (
      <NoProjectsDisplay>
        Sorry there's no project(s) to display
      </NoProjectsDisplay>
    ) : (
      props.projects.map((project) => {
        return <Project key={project.id} {...project} />;
      })
    )}
  </ProjectListContainer>
);

const mapStateToProps = (state) => {
  return {
    // projects: state.projects.reverse(),
    projects: selectProjects(state.projects.reverse(), state.filters),
  };
};

export default connect(mapStateToProps)(ProjectList);
