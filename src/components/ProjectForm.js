import React from "react";
import styled from "@emotion/styled";
import { storage } from "../firebase/firebase";

const ProjectFormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.project ? props.project.name : "",
      description: props.project ? props.project.description : "",
      technology: props.project ? props.project.technology : "",
      image: null,
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
        url: this.state.url,
      });
    }
  };

  render() {
    return (
      <ProjectFormContainer>
        <form onSubmit={this.onSubmit}>
          <label for="projectName">Project Name:</label>
          <input
            autoFocus
            id="projectName"
            name="projectName"
            type="text"
            aria-label="projectName"
            value={this.state.name}
            onChange={this.onNameChange}
          ></input>
          <br />
          <label for="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            type="text"
            aria-label="projectDescription"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          ></textarea>
          <br />
          <label for="technologyUsed">Technology Used:</label>
          <input
            id="technologyUsed"
            name="technologyUsed"
            type="text"
            aria-label="technologyUsed"
            value={this.state.technology}
            onChange={this.onTechnologyChange}
          ></input>
          <br />
          <input type="file" onChange={this.onImageChange} />
          <br />
          <button onClick={this.handleUpload}>Upload</button>
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