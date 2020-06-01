import React from "react";
import styled from "@emotion/styled";

const LandingPageContainer = styled.main`
  height: 90vh;
  width: 100vw;
`;

function LandingPage() {
  return (
    <LandingPageContainer>
      <p>home page</p>
    </LandingPageContainer>
  );
}

export default LandingPage;
