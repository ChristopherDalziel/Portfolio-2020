import React from "react";
import styled from "@emotion/styled";
import ProjectForm from "../ProjectForm";

const ProjectPageContainer = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectHeading = styled.h1`
  margin: 30px;
`;

const CreateProjectPage = () => {
  return (
    <ProjectPageContainer>
      <ProjectHeading>Create a new project.</ProjectHeading>

      <ProjectForm />
    </ProjectPageContainer>
  );
};

export default CreateProjectPage;
