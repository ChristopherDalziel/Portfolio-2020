import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import Project from "./Project";
import backgroundImage from "../assets/Web_Background.png";

const ProjectListContainer = styled.div``;

const ProjectList = (props) => (
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
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(ProjectList);
