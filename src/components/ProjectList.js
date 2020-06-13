import React from "react";
import { connect } from "react-redux";
import Project from "./Project";

const ProjectList = (props) => (
  <>
    <Project />
    {props.projects.map((project) => {
      return <Project key={project.id} {...project} />;
    })}
  </>
);

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(ProjectList);
