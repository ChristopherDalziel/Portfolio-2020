import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import backgroundImage from "../../assets/Web_Final_Col.jpg";
import resume from "../../assets/res.pdf";

const AboutContainer = styled.main`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
`;

const AboutContent = styled.div`
  padding: 100px 0 0 50px;
  height: 80%;
  width: 30%;
  font-size: 15px;
`;

const ResumeButton = styled.a`
  font-family: "Open Sans", sans-serif;
  background-color: #ef636c;
  border: none;
  color: white;
  padding: 12px 15px;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background: #a8b7ab;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }
`;

const AboutHeader = styled.h1`
  color: #493a37;
`;

class AboutPage extends React.Component {
  render() {
    return (
      <AboutContainer>
        <AboutContent>
          <AboutHeader>
            Hello. <br /> my names Chris.
          </AboutHeader>
          <br />
          <p>
            Over the past 6 years I’ve had the privilege of working as a store
            manager across 2 businesses gaining experience in many different
            collaborative environments and situations. 5 months ago, I stepped
            down from my position to chase a new passion with the hope of
            finding a new career path. I believe the key to success is really
            giving it your all in every opportunity you have through every
            single task, every single day, through hard work anything can be
            achieved.
            <br />
            <br />
            Since stepping down I've been working towards a new career path of
            becoming a web developer and for the past 5 months I've been a
            fast-track student at Coder Academy Melbourne where I'm honing my
            skills and knowelege so in a few months I will be ready to join the
            workforce as a junior developer.
            <br />
            <br />
            Through my expierences of life, work and study I've found my passion
            for technology, problem solving, collaboration and teamwork. I'm
            hoping through this new career path I can continue to persue these
            passions and work towards a career that can be more impactful.
            <br />
            <br />
            <br />
            <ResumeButton>
              <Link
                style={{ color: "white" }}
                to={resume}
                target="_blank"
                download
              >
                DOWNLOAD MY RESUME
              </Link>
            </ResumeButton>
          </p>
        </AboutContent>
      </AboutContainer>
    );
  }
}

export default AboutPage;
