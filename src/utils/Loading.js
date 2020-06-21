import React from "react";
import styled from "@emotion/styled";
import backgroundImage from "../assets/Web_Background.png";
import loading from "../assets/loader.gif";

const ApplicationLoadingContainer = styled.main`
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.div`
  height: 75px;
  width: 75px;
  background-image: url(${loading});
  background-size: 75px 75px;
`;

const PleaseWait = styled.p`
  width: 100px;
`;

const ApplicationLoading = () => {
  return (
    <ApplicationLoadingContainer>
      <PleaseWait>Please wait..</PleaseWait>
      <Loading />
    </ApplicationLoadingContainer>
  );
};

export default ApplicationLoading;
