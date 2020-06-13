import React from "react";
import styled from "@emotion/styled";
import ProjectList from "../ProjectList";
import backgroundImage from "../../assets/Web_Background.png";

const PortfolioPageContainer = styled.div`
background-image: url(${backgroundImage})
background-size: cover;
height: 100vh`;

const PortfolioPage = () => {
  return (
    <PortfolioPageContainer>
      <ProjectList />
    </PortfolioPageContainer>
  );
};

export default PortfolioPage;
