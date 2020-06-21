import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import Project from "./Project";

import selectProjects from "../selector/projects";

const ProjectListContainer = styled.div`
  height: 86vh;
  width: 100vw;
  overflow: scroll;
  @media (max-width: 1024px) {
    height: 86.5vh;
  }
  @media (max-width: 815px) {
    height: 85vh;
  }
`;

export const ProjectList = (props) => (
  <ProjectListContainer>
    {props.projects.length === 0 ? (
      <p>No project(s) to display right now</p>
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
