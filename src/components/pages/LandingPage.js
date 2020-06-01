import React from "react";
import styled from "@emotion/styled";
import backgroundImage from "../../assets/Web_Final_Col.jpg";
import NavComponent from "../Nav";
import FooterComponent from "../Footer";

const LandingPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

function LandingPage() {
  return (
    <LandingPageContainer>
      <NavComponent />
      <p>home page</p>
      <FooterComponent />
    </LandingPageContainer>
  );
}

export default LandingPage;
