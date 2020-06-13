import React from "react";
import styled from "@emotion/styled";
import ProjectList from "../ProjectList";
import backgroundImage from "../../assets/Web_Background.png";

const PortfolioContainer = styled.main`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
`;

const PortfolioPage = () => {
  return (
    <PortfolioContainer>
      <ProjectList />
    </PortfolioContainer>
  );
};

export default PortfolioPage;
