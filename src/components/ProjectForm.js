import React from "react";
import styled from "@emotion/styled";
import { storage } from "../firebase/firebase";
import Button from "../utils/Button";

const ProjectFormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  margin: 0 0 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  &:focus {
    outline: 0;
    border-bottom: 1px solid #ef626b;
  }
`;

const ProjectTextArea = styled.textarea`
  border: none;
  height: 100px;
  width: 100%;
  max-width: 100%;
  resize: none;
  background: transparent;
  &:focus {
    outline: 0;
    border: 1px solid #ef626b;
  }
`;

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.project ? props.project.name : "",
      description: props.project ? props.project.description : "",
      technology: props.project ? props.project.technology : "",
      image: null,
      githubUrl: props.project ? props.project.githubUrl : "",
      url: "",
      progress: 0,
    };
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => {
      return { name };
    });
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => {
      return { description };
    });
  };

  onTechnologyChange = (e) => {
    const technology = e.target.value;
    this.setState(() => {
      return { technology };
    });
  };

  onImageChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  onGithubUrlChange = (e) => {
    const githubUrl = e.target.value;
    this.setState(() => {
      return { githubUrl };
    });
  };

  handleUpload = (e) => {
    e.preventDefault();
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url });
          });
      }
    );
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name) {
      this.setState(() => ({
        error: "Please provide a name ",
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        name: this.state.name,
        description: this.state.description,
        technology: this.state.technology,
        githubUrl: this.state.githubUrl,
        url: this.state.url,
      });
    }
  };

  render() {
    return (
      <ProjectFormContainer>
        <form onSubmit={this.onSubmit}>
          <label for="projectName">Project Name:</label>
          <ProjectInput
            autoFocus
            id="projectName"
            name="projectName"
            type="text"
            aria-label="projectName"
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <br />
          <label for="projectDescription">Project Description:</label>
          <ProjectTextArea
            id="projectDescription"
            name="projectDescription"
            type="text"
            aria-label="projectDescription"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          ></ProjectTextArea>
          <br />
          <label for="technologyUsed">Technology Used:</label>
          <ProjectInput
            id="technologyUsed"
            name="technologyUsed"
            type="text"
            aria-label="technologyUsed"
            value={this.state.technology}
            onChange={this.onTechnologyChange}
          />
          <label for="githubUrl">GitHub Url:</label>
          <ProjectInput
            id="githubUrl"
            name="githubUrl"
            type="text"
            aria-label="githubUrl"
            value={this.state.githubUrl}
            onChange={this.onGithubUrlChange}
          />
          <br />
          <input type="file" onChange={this.onImageChange} />
          <br />
          <Button handleClick={this.handleUpload}>Upload</Button>
          <br />
          <progress value={this.state.progress} max="100" />
          <br />
          <button type="submit">Submit Project</button>
        </form>
      </ProjectFormContainer>
    );
  }
}

export default ProjectForm;
