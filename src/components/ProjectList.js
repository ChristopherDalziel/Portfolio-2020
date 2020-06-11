import React from "react";
import { connect } from "react-redux";
import Project from "./Project";

const ProjectList = (props) => {
  return (
    <div>
      {props.projects.length === 0 ? (
        <p>No projects to display</p>
      ) : (
        props.projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })
      )}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     projects:
//   }
// }

// export default connect(mapStateToProps)(ProjectList);
export default ProjectList;
