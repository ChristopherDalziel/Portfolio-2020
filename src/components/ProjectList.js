import React from "react";
import { connect } from "react-redux";
import Project from "./Project";

const ProjectList = (props) => (
  <div>
    <h1>Project List</h1>
    <h2>Amount of Projects:</h2>
    {props.projects.length}
    <Project />
    {props.projects.map((project) => {
      return <Project key={project.id} {...project} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(ProjectList);
