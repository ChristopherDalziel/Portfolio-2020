import React from "react";
import styled from "@emotion/styled";
import backgroundImage from "../../assets/Web_Final_Col.jpg";
import mobileBackgroundImage from "../../assets/Web_Final_Col_Mob.jpg";
import { keyframes } from "@emotion/core";

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}`;

const LandingPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  @media (max-width: 815px) {
    background-image: url(${mobileBackgroundImage});
    background-size: auto 80vh;
    background-repeat: no-repeat;
`;

const HeroTextContainer = styled.div`
  animation: ${fadeInAnimation} ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: #493a37;
  margin-left: 18%;
`;

const Heading = styled.h1`
  margin-top: 30%;
  font-size: 6em;
  @media (max-width: 815px) {
    margin-top: 60vh;
    font-size: 60px;
`;

const SubHeading = styled.h2`
  font-size: 3em;
  @media (max-width: 815px) {
    font-size: 25px;
`;

function LandingPage() {
  return (
    <LandingPageContainer>
      <HeroTextContainer>
        <Heading>HELLO.</Heading>
        <SubHeading>my name's Chris.</SubHeading>
      </HeroTextContainer>
    </LandingPageContainer>
  );
}

export default LandingPage;
