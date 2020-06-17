import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import Project from "./Project";

const ProjectListContainer = styled.div`
  margin-top: 6vh;
  height: 87vh;
  width: 100vw;
  overflow: scroll;
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
    projects: state.projects.reverse(),
  };
};

export default connect(mapStateToProps)(ProjectList);
