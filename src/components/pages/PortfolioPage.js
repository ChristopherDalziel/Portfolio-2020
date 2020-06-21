import React from "react";
import styled from "@emotion/styled";
import ProjectList from "../ProjectList";
import ProjectFilter from "../ProjectFilter";
import backgroundImage from "../../assets/Web_Background.png";

const PortfolioContainer = styled.main`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  overflow: scroll;
`;

const PortfolioContent = styled.div`
  height: 50%;
  width: 80%;
`;

const PortfolioPage = () => {
  return (
    <PortfolioContainer>
      <PortfolioContent>
        <ProjectFilter />
        <ProjectList />
      </PortfolioContent>
    </PortfolioContainer>
  );
};

export default PortfolioPage;
