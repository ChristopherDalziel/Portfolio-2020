import React from "react";
import { connect } from "react-redux";
import Project from "./Project";
import { startSetProjects } from "../actions/projects";

// export const ProjectList = (props) => (
//   <div>
//     <p>{props.name}</p>
//     <p>{props.description}</p>
//     <p>{props.technology}</p>
//     <p>{props.url}</p>
//   </div>
// );

// Regular Component
const ProjectList = (props) => (
  <div>
    <h1>Project List</h1>
    {props.projects.length}
    <Project />
    {props.projects.map((project) => {
      return <Project key={project.id} {...project} />;
    })}
  </div>
);

// Function
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

// const mapStateToProps = (state) => {
//   return {
//     projects: startSetProjects(state.projects),
//   };
// };

export default connect(mapStateToProps)(ProjectList);
// export default ProjectList;
