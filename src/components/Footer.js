import React from "react";
import styled from "@emotion/styled";

import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  max-width: 100vw;
  height: 10%;
  width: 100%;
  padding-bottom: 8px;
  @media (max-width: 1024px) {
    background-color: white;
    height: 4%;
  }
  @media (max-width: 950px) {
    background-color: transparent;
  }
`;

const FooterLinks = styled.a`
  display: flex;
  align-items: flex-end;
  margin: 5px;
  color: #493a37;
  font-size: 50px;
  &:hover {
    color: #a8b7ab;
    -webkit-transition: color 0.3s ease-in-out;
    -moz-transition: color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
  }
  @media (max-width: 1024px) {
    margin: 0;
    margin-left: 8px;
    font-size: 34px;
  }
`;

const FooterComponent = () => {
  return (
    <Footer>
      <FooterLinks target="_blank" href="https://twitter.com/dalziel_chris">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </FooterLinks>
      <FooterLinks
        target="_blank"
        href="https://www.linkedin.com/in/christopher-dalziel-129427187/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </FooterLinks>
      <FooterLinks target="_blank" href="https://github.com/ChristopherDalziel">
        <FontAwesomeIcon icon={faGithubSquare} />
      </FooterLinks>
    </Footer>
  );
};

export default FooterComponent;
