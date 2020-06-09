import React from "react";
import styled from "@emotion/styled";

const ProjectFormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectForm = () => {
  return (
    <ProjectFormContainer>
      <form>
        <label for="projectName">Project Name:</label>
        <input id="projectName" name="projectName" type="text"></input>
        <br />
        <label for="projectDescription">Project Description:</label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          type="text"
        ></textarea>
        <br />
        <label for="projectDescription">Technology Used:</label>
        <input id="technologyUsed" name="technologyUsed" type="text"></input>
        <p>image upload goes here</p>
        <button type="submit">Submit Project</button>
      </form>
    </ProjectFormContainer>
  );
};

export default ProjectForm;
