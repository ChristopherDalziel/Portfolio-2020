import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import backgroundImage from "../../assets/Web_Final_Col.jpg";
import mobileBackgroundImage from "../../assets/Web_Background.png";
import mobileSelfImageBackground from "../../assets/Web_Final_Col_Mob.jpg";
import resume from "../../assets/res.pdf";
import Button from "../../utils/Button";

const AboutContainer = styled.main`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  @media (max-width: 1024px) {
    background-image: url(${mobileSelfImageBackground});
  }
  @media (max-width: 815px) {
    height: 84vh;
    background-image: url(${mobileBackgroundImage});
    overflow: auto;
  }
  @media (max-width: 736px) {
    background-image: url(${mobileBackgroundImage});
  }
  @media (max-width: 675px) {
    background-image: url(${mobileBackgroundImage});
  }
`;

const AboutContent = styled.div`
  padding: 100px 0 0 50px;
  height: 80%;
  width: 35%;
  padding-right: 61.5%;
  font-size: 15px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 1024px) {
    padding: 90px 50px 50px 50px;
    background: rgba(99, 69, 57, 0.6);
    height: 86%;
    color: white;
  }
  @media (max-width: 815px) {
    background: none;
    color: #493737;
    padding: 0;
    position: absolute;
    bottom: 0;
    overflow: hidden;
    height: 94vh;
    width: 97%;
    margin: 10px;
  }
  @media (max-width: 736px) {
    margin-top: 6vh;
    position: static;
    height: 86%;
    width: 94vw;
    overflow: scroll;
  }
  @media (max-width: 675px) {
    margin-top: 6vh;
    position: static;
    height: 84%;
    overflow: scroll;
  }
  @media (max-width: 600px) {
    margin-top: 7vh;
  }
`;

const AboutHeader = styled.h1`
  color: #493a37;
  @media (max-width: 1024px) {
    color: white;
  }
  @media (max-width: 815px) {
    color: #493737;
  }
`;

const SubHeading = styled.h4`
  color: #493a37;
  @media (max-width: 1024px) {
    color: white;
  }
  @media (max-width: 815px) {
    color: #493737;
  }
`;

class AboutPage extends React.Component {
  render() {
    return (
      <AboutContainer>
        <AboutContent>
          <AboutHeader>
            Hello. <br /> my names Chris.
          </AboutHeader>
          {/* <SubHeading>junior developer.</SubHeading> */}
          <br />
          <p>
            I'm a junior developer from Melbourne, Australia working for Lexicon
            Digital. Previously this site was used as a portfolio for all of my
            personal projects as I looked for work. This isn't my focus now but
            I've decided that I will continue to host the site and display my
            previous and future projects as I continue to grow as a developer.
            (Who knows maybe I'll try my hand at blogging too)
            <br /> <br />
            If you have any questions, or are a fellow student or junior
            developer that I could help out please don't hesitate to get in
            contact with me via email or on my socials. <br /> <br />
            Previously I've worked mostly with ReactJS, right now I am focused
            on learning Kotlin.
            {/* I’m a highly motivated and passionate individual looking for my next
            opportunity. Over the past 6 years I’ve had the privilege of
            leading, and working within a wide array of teams across multiple
            businesses gaining experience in many collaborative environments and
            situations.
            <br />
            <br />
            I am now refocusing my career goals to combine what I learnt from
            and loved about my previous positions with my passion for
            technology.
            <br />
            <br />
            3 months ago I completed my Diploma of Information of Technology
            with Coder Academy Melbourne, A fully accredited 6-month full time,
            full stack web development course focused on fast paced learning via
            projects. During my time at Coder Academy I learned many different
            web technologies beginning with my first project which was a Ruby
            terminal app that explored object orientated design patterns,
            followed by a Ruby on Rails marketplace that introduced me to the
            MVC architecture, before finishing the course with a group project
            based on the MERN stack for a real world client. This final project
            would be a combination of everything we had learnt so far as well as
            the first time we would collaborate with other developers on a
            single project – for me, this was by far the most challenging and
            rewarding of all the assessments at Coder Academy. <br />
            My experience at Coder Academy wasn’t just about learning
            programming languages, it was about preparing for the industry. We
            also touched on cloud development tools, problem solving, user
            experience design and accessibility, discrete maths, version control
            and how to work in a professional development team using an Agile
            workflow.
            <br />
            <br />
            Since then I’ve been focused on continuing my own development and
            learning improve every single day while I look for new opportunities
            to follow in my developer journey.
            <br />
            <br />
            I can’t wait to begin my new career and I’d love to hear from you.
            <br />
            <br />
            Check out my resume by downloading it from the link below.
            <br />
            <br />
            <br />
            <Button>
              <Link
                style={{ color: "white" }}
                to={resume}
                target="_blank"
                download
              >
                DOWNLOAD MY RESUME
              </Link>
            </Button> */}
          </p>
        </AboutContent>
      </AboutContainer>
    );
  }
}

export default AboutPage;
