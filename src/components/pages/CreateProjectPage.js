import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import ProjectForm from "../ProjectForm";
import { startCreateProject } from "../../actions/projects";

const ProjectPageContainer = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectHeading = styled.h1`
  margin: 30px;
`;

export class CreateProjectPage extends React.Component {
  onSubmit = (project) => {
    this.props.startCreateProject(project);
    this.props.history.push("/portfolio");
  };

  render() {
    return (
      <ProjectPageContainer>
        <ProjectHeading>Create a new project.</ProjectHeading>
        <ProjectForm onSubmit={this.onSubmit} />
      </ProjectPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startCreateProject: (project) => dispatch(startCreateProject(project)),
});

export default connect(undefined, mapDispatchToProps)(CreateProjectPage);
